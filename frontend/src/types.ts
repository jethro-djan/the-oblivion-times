export interface PostSummary {
  id: string;
  slug: string
  title: string;
  snippet: string;
  author: string;
  category: string;
  date: string;
}

export interface Post extends PostSummary {
  content: string;
}

export interface BlogPostsProps {
    postSummaries: PostSummary[];
    loading: boolean;
}

export interface Essays {
    posts: Post[];
    loading: boolean;
}

