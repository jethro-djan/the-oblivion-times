import {useEffect, useState } from 'react';
import axios from 'axios';
import { type BlogPostsProps } from '../types';
import Hero from '../components/Hero';
import HomeBlogposts from '../components/HomeBlogposts';

function HomePage() {
  const [postSummaries, setPostSummaries] = useState<PostSummary[]>([]);
  const [post, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get<PostSummary[]>('http://localhost:5099/api/posts');
              setPostSummaries(response.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          } finally {
              setLoading(false);
          }
      };

      fetchData();
  }, []);
  
  return (
    <>
        <div className="max-w-4xl mx-auto">
            <Hero />
            <HomeBlogposts postSummaries={postSummaries} loading={loading} />
        </div>
    </>
  );
}

export default HomePage;
