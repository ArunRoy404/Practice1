import { ChevronDown } from "lucide-react";

const AccordionTitle = ({ children, index, setActiveIndex, activeIndex }) => {
    return (
        <div
            onClick={() => {
                if (index === activeIndex) return setActiveIndex(null)
                setActiveIndex(index)
            }}
            className="flex justify-between items-center cursor-pointer mb-3 md:mb-5">
            <h2 className="text-primary text-base font-semibold md:text-[32px] md:font-bold lg:text-5xl">
                {children}
            </h2>

            <div className={` ${index === activeIndex ? 'rotate-180' : ''} transition-transform duration-300`}>
                <ChevronDown size={32} color="#AAB6B5" />
            </div>
        </div>
    );
};

export default AccordionTitle;