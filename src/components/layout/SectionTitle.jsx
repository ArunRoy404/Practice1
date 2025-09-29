import React from 'react';

const SectionTitle = ({ className, children }) => {
    return (
        <h1 className={`mb-8 md:mb-10 lg:mb-[120px] font-bold text-2xl md:text-[32px] lg:text-5xl text-primary text-center ` +` `+ className}>
            {children}
        </h1>
    );
};

export default SectionTitle;