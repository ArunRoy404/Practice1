
const AccordionContent = ({ children, index, activeIndex }) => {
    return (
        <p className={`text-secondary text-sm font-normal lg:text-lg
                ${index === activeIndex ? 'h-14' : 'h-0'} overflow-hidden transition-all duration-300 `}>
            {children}
        </p>
    );
};

export default AccordionContent;