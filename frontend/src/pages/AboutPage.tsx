const AboutPage = () => {
    return (
        <>
            <article className="px-8 max-w-3xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="font-serif text-3xl md:text-4xl font-semibold leading-tight mb-6">About the Author</h1>
                </header>
                <div 
                    className="font-serif prose prose-lg lg:prose-xl max-w-none"
                >
                    <p>
                        <i>Learn about what this is all about.</i>
                    </p>
                    <h3>About the publication</h3>
                    <p>
                        Oblivion Times is a digital salon for deep thinking and careful writing.
                    </p>

                    <p>
                        There is a war going on: the war of ideas. Ideas are transforming the world, and you in it, each and every single day. It means you cannot remain a neutral. Everyday we must grapple with them to win over or lose to them. 
                    </p>

                    <h3>About the author</h3>
                    <p>
                        You have reached the hub for the refined thoughts of a wandering mind. Born too late to be an explorer, I am just in time to travel able to peer into the very mind of reality's fabric.
                    </p>
                </div>
            </article>
        </>
    );
}

export default AboutPage;
