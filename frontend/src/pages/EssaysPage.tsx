import { useState, useEffect } from 'react';
import axios from 'axios';
import { type PostSummary } from '../types';
import { Link } from 'react-router';

const EssaysPage = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [postSummaries, setPostSummaries] = useState<PostSummary[]>([]);
    const [filteredPostSummaries, setFilteredPostSummaries] = useState<PostSummary[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (activeCategory === "All") {
            setFilteredPostSummaries(postSummaries);
        } else {
            const filtered = postSummaries.filter((postSummary) => postSummary.category === activeCategory);
            setFilteredPostSummaries(filtered);

        }
    }, [activeCategory, postSummaries]);

    const handleCategoryBtnClick = (categoryName: string) => {
        setActiveCategory(categoryName);
    };

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get<PostSummary[]>('http://localhost:5099/api/posts');
              setPostSummaries(response.data);
              const categoriesWithDuplicates = response.data.map(postSummary => postSummary.category);
              const uniqueCategories = ['All', ...new Set(categoriesWithDuplicates)];
              setCategories(uniqueCategories);
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
        <>
            <section className="px-4 py-12">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Essays</h1>
                    <p className="font-serif text-lg text-primary-light max-w-2xl mx-auto">
                        Deep dives and thoughtful explorations across mathematics, software, and philosophy.
                    </p>
                </div>
            </section>

            <section className="px-4 mb-12">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((category) => {
                            const isActive = category == activeCategory;
                            const categoryClasses = isActive ? "active bg-accent text-white" : "text-primary-light hover:bg-gray-200 bg-gray-100";

                            return (
                            <button 
                                key={category} 
                                onClick={() => handleCategoryBtnClick(category)} 
                                className={` ${categoryClasses} 'filter-btn px-4 py-2 rounded-full font-sans text-sm transition-colors'`}>
                                {category}
                            </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="px-4 pb-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredPostSummaries.map((postSummary) => {
                            return (
                                <Link
                                    to={`/essays/${postSummary.slug}`}
                                    key={postSummary.id}
                                    className="block"
                                >
                                    <article className="border border-border-light rounded-lg p-6 bg-white cursor-e-pointer hover:shadow-lg transistion-all duration-300 ease-in-out hover:translate-z-8 h-full flex flex-col">
                                        <div className="flex justify-between items-center mb-4 font-sans">
                                            <span className="text-xs font-semibold text-accent uppercase tracking-wide">{postSummary.category}</span>
                                            <span className="text-xs text-primary-light">12 min</span>
                                        </div>
                                        <h3 className="font-serif text-xl font-semibold leading-tight mb-3 flex-grow">
                                            {postSummary.title} 
                                        </h3>
                                        <p className="font-serif text-base leading-relaxed text-primary-light mb-4 line-clamp-3">
                                            {postSummary.snippet}
                                        </p>
                                        <div className="mt-auto">
                                            <p className="font-sans italic text-accent text-sm">— {postSummary.author}</p>
                                            <p className="font-sans text-xs text-primary-light mt-1">{postSummary.date}</p>
                                        </div>
                                    </article>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default EssaysPage;
