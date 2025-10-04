import {useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import { type Post } from '../types';

const PostPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchpost = async () => {
            if (!slug) {
                setError("No post identified supplied");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                const response = await axios.get<Post>(`http://localhost:5099/api/posts/${slug}`);
                setPost(response.data);
            } catch (err) {
                console.error('Error fetching post', err);
                setError('Failed to load post');
            } finally {
                setLoading(false);
            } 
        };

        fetchpost();
    }, [slug]);


    if (loading) {
        return (
            <div className="max-w-4xl mx-auto px-6 py-12 text-center">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="max-w-4xl mx-auto px-6 py-12 text-center">
                <div className="text-lg text-red-600 mb-4">
                    {error || 'Post not found'}
                </div>
                <button 
                    onClick={() => navigate("/")} 
                    className="text-blue-600 hover:underline"
                >
                    ← Back to Home
                </button>
            </div>
        );
    }

    return (
        <article className="px-8 max-w-3xl mx-auto">
            <header className="text-center mb-12">
                <span
                    className="inline-block font-sans text-sm font-semibold text-accent uppercase tracking-wide mb-4"
                >
                    {post.category}
                </span>
                <h1
                    className="font-serif text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight mb-6"
                >
                    {post.title}
                </h1>
                <div className="font-sans text-lg text-primary-light mb-8">
                    <span className="font-medium">{post.author}</span> • {post.date}
                </div>
            </header>
            <div
                className="font-serif prose prose-lg lg:prose-xl max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
            >
            </div>
        </article>
    );
};

export default PostPage;
