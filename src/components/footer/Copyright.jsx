import { footerData } from '@/data/footerData';
import React from 'react';

const Copyright = () => {
    return (
        <div className=' mt-8 md:mt-10 xl:mt-20 flex flex-col justify-center md:flex-row md:justify-between items-center'>
            <p className='text-secondary opacity-50 text-[10px] md:text-sm font-normal' >{footerData.copyright.text}</p>
            <p className='text-secondary opacity-50 text-[10px] md:text-sm  font-normal' >{footerData.copyright.credit}</p>
        </div>
    );
};

export default Copyright;