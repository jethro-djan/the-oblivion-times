using Markdig;
using Ganss.Xss;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSingleton<BlogPostService>();

builder.Services.AddCors(options => 
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

var app = builder.Build();

var blogService = app.Services.GetRequiredService<BlogPostService>();
var posts = blogService.LoadPosts("./data/posts");

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("AllowReactApp");
app.UseStaticFiles();
// app.UseStaticFiles(new StaticFileOptions 
// {
//     FileProvider = new PhysicalFileProvider(
//         Path.Combine(builder.Environment.ContentRootPath, "assets")),
//     RequestPath = "/assets"
// });
app.UseAuthorization();
app.MapStaticAssets();

app.MapGet("/api/posts", () => 
{
    var results = posts.Select(p => new 
    {
        id = p.Id,
        slug = p.Slug,
        title = p.Title,
        snippet = p.Snippet,
        author = p.Author,
        category = p.Category,
        date = p.Date,
    });
    
    return Results.Ok(results);
});

app.MapGet("/api/posts/{slug}", (string slug) => 
{
    var post = posts.FirstOrDefault(p => p.Slug == slug);
    if (post == null) return Results.NotFound();

    return Results.Ok(new
    {
        id = post.Id,
        slug = post.Slug,
        title = post.Title,
        snippet = post.Snippet,
        author = post.Author,
        category = post.Category,
        date = post.Date,
        content = post.Content,
    });
});

app.MapGet("/debug/paths", () => 
{
    var contentRoot = builder.Environment.ContentRootPath;
    var assetsPath = Path.Combine(contentRoot, "assets");
    var exists = Directory.Exists(assetsPath);
    
    return Results.Ok(new
    {
        contentRoot,
        assetsPath,
        assetsExists = exists,
        files = exists ? Directory.GetFiles(assetsPath, "*", SearchOption.AllDirectories) : Array.Empty<string>()
    });
});

app.Run();

record Post(string Id, string Slug, string Title, string Snippet, string Author, string Category, string Date, string Content);
record PostSummary(string Id, string Slug, string Title, string Snippet, string Author, string Category, string Date);

class BlogPostService 
{
    public List<Post> LoadPosts(string postsDirectory)
    {
        var posts = new List<Post>();
        var markdownFiles = Directory.GetFiles(postsDirectory, "*.md");

        foreach (var file in markdownFiles)
        {
            var content = File.ReadAllText(file);
            var post = ParseMarkdownPost(content, Path.GetFileNameWithoutExtension(file));
            posts.Add(post);
        }

        return posts.OrderByDescending(p => p.Date).ToList();
    }

    private Post ParseMarkdownPost(string content, string fileName)
    {
        var parts = content.Split("---", 3, StringSplitOptions.RemoveEmptyEntries);
        var frontmatter = parts[0].Trim();
        var markdownContent = parts.Length > 1 ? parts[1].Trim() : "";

        var deserialiser = new YamlDotNet.Serialization.Deserializer();
        var metadata = deserialiser
            .Deserialize<Dictionary<string, object>>(frontmatter);

        var pipeline = new MarkdownPipelineBuilder()
            .UseAdvancedExtensions()
            // .DisableHtml()
            .UsePipeTables()
            .UseMathematics()
            .Build();

        var htmlContent = Markdown.ToHtml(markdownContent, pipeline);

        var sanitiser = new HtmlSanitizer();
        sanitiser.AllowedTags.Add("figure");
        sanitiser.AllowedTags.Add("figcaption");
        sanitiser.AllowedAttributes.Add("class");
        sanitiser.AllowedAttributes.Add("title");

        htmlContent = sanitiser.Sanitize(htmlContent);

        // Remove the first 3 entries (which together make a date) to get slug
        var slug = string.Join("-", fileName.Split("-", StringSplitOptions.RemoveEmptyEntries)[3..]);
        var dateString = string.Join("-", fileName.Split("-", StringSplitOptions.RemoveEmptyEntries)[..3]);

        return new Post(
                Id: Math.Abs(fileName.GetHashCode()).ToString("X"),
                Slug: slug,
                Title: metadata.GetValueOrDefault("title", "")?.ToString() ?? "",
                Snippet: metadata.GetValueOrDefault("excerpt", "")?.ToString() ?? "",
                Author: metadata.GetValueOrDefault("author", "")?.ToString() ?? "",
                Category: metadata.GetValueOrDefault("category", "")?.ToString() ?? "",
                Date: DateOnly.FromDateTime(DateTime.ParseExact(dateString, "yyyy-MM-dd", System.Globalization.CultureInfo.InvariantCulture)).ToString("MMMM dd, yyyy"),
                Content: htmlContent

        );

    }
}
