const Section = ({ children, className }) => {
    return (
        <section className={className+` `+`py-8 px-4 md:px-10 md:py-10 xl:pt-[120px] xl:px-[120px] xl:pb-[60px] transition-all duration-300`}>
            {children}
        </section>
    );
};

export default Section;