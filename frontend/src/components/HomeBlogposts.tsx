import { Link } from 'react-router';
import { type PostSummary } from '../types';

function HomeBlogposts({ postSummaries }: { postSummaries: PostSummary[] }) {
    return (
        <div className="min-h-screen">
            <section className="px-6 pb-8 max-w-content mx-auto">
                <h2 className="font-sans text-sm font-semibold uppercase tracking-wide text-primary-light text-center mb-6">
                    Recent Essays
                </h2>

                {postSummaries.map((postSummary) => (
                    <Link
                        to={`/essays/${postSummary.slug}`}
                        key={postSummary.id}
                        className="block"
                    >
                        <article 
                            className="border border-border-light rounded-lg p-6 mb-6 bg-white cursor-pointer hover:shadow-lg transistion-all duration-300 ease-in-out hover:translate-z-8" 
                        >
                            <div className="flex justify-between items-center mb-4 font-sans">
                                <span className="text-xs font-semibold text-accent uppercase tracking-wide">{postSummary.category}</span>
                                <span className="text-xs text-primary-light">{postSummary.date}</span>
                            </div>
                            <h3 className="font-serif text-xl md:text-2xl font-semibold leading-tight text-primary">
                                {postSummary.title}
                            </h3>
                            <p className="font-serif md:text-lg leading-relaxed text-primary-light mb-4">
                                {postSummary.snippet}
                            </p>
                            <p className="font-normal font-sans text-base italic">
                                — {postSummary.author}
                            </p>
                        </article>
                    </Link>
                ))}
            </section>
        </div>
    );
}

export default HomeBlogposts;
