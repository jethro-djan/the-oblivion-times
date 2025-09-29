import {useEffect, useState } from 'react';
import axios from 'axios';
import type { PostSummary } from '../types';
import Hero from '../components/Hero';
import HomeBlogposts from '../components/HomeBlogposts';

function HomePage() {
  const [postSummaries, setPostSummaries] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get<PostSummary[]>('http://localhost:5099/api/posts');
              setPostSummaries(response.data);
              setError(null);
          } catch (error) {
              console.error('Error fetching data:', error);
              setError('Failed to load posts. Please try again later.');
          } finally {
              setLoading(false);
          }
      };

      fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <Hero />
      
      {loading && (
        <div className="px-6 pb-8 text-center">
          <p className="text-primary-light">Loading posts...</p>
        </div>
      )}
      
      {error && (
        <div className="px-6 pb-8 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      )}
      
      {!loading && !error && (
        <HomeBlogposts postSummaries={postSummaries} />
      )}
    </div>
  );
}

export default HomePage;
