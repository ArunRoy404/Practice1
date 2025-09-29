
const SectionDescription = ({ children, className }) => {
    return (
        <p className={ className+ ` `+`text-sm font-normal lg:text-lg text-center max-w-[1000px] mx-auto
                        mb-4 md:mb-6 lg:mb-8`}>
            {children}
        </p>
    );
};

export default SectionDescription;