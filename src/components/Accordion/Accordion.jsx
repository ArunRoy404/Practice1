'use client'

import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='mt-8 md:mt-0'>
            {
                data.faqs.map((item, index) => {
                    return <AccordionItem
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        key={item.id}
                        index={index}
                        item={item}
                    />
                })
            }
        </div>
    );
};

export default Accordion;