const Section = ({ children, className }) => {
    return (
        <section className={className+` `+`transition-all duration-300 max-w-[1360px] mx-auto px-4 md:px-10 py-8 md:py-10 lg:py-[120px]`}>
            {children}
        </section>
    );
};

export default Section;