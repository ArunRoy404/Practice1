import React from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';

const AccordionItem = ({ item, setActiveIndex, activeIndex, index }) => {
    return (
        <div className='border-b border-[rgba(212,219,224,1)] pb-4 mb-4 md:pb-6 md:mb-6 lg:pb-8 lg:mb-8'>
            <AccordionTitle
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}>
                {item.question}
            </AccordionTitle>
            <AccordionContent
                index={index}
                activeIndex={activeIndex}>
                {item.answer}
            </AccordionContent>
        </div>
    );
};

export default AccordionItem;