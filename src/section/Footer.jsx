import FooterSocials from '@/components/footer/FooterSocials';
import { footerData } from '@/data/footerData';
import React from 'react';

const Footer = () => {
    return (
        <footer className={`py-8 px-4 md:px-10 md:py-10 lg:pt-[120px] lg:px-[120px] lg:pb-[60px] transition-all duration-300
        `}>
            <div>
                <h1 className='text-black text-xl font-bold md:text-[32px]'>{footerData.logo.text}</h1>
                <FooterSocials footerData={footerData}/>
            </div>
        </footer>
    );
};

export default Footer;