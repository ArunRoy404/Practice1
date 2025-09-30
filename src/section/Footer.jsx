import Copyright from '@/components/footer/Copyright';
import FooterContact from '@/components/footer/FooterContact';
import FooterLinks from '@/components/footer/FooterLinks';
import FooterSocials from '@/components/footer/FooterSocials';
import { footerData } from '@/data/footerData';
import React from 'react';

const Footer = () => {
    return (
        <footer className={`py-8 px-4 md:px-10 md:py-10 xl:pt-[120px] xl:px-[120px] xl:pb-[60px] transition-all duration-300
        `}>
            <div className='space-y-8 md:space-y-10  xl:flex xl:justify-between'>

                <div>
                    <h1 className='text-black text-xl font-bold md:text-[32px]'>{footerData.logo.text}</h1>
                    <FooterSocials footerData={footerData} />
                </div>

                <div className='space-y-8 md:space-y-0 md:flex gap-[152px]'>
                    <FooterLinks title={footerData.services.title} links={footerData.services.links} />
                    <FooterLinks title={footerData.links.title} links={footerData.links.links} />
                </div>

                <FooterContact contactInfo={footerData.contact} />
            </div>

            <Copyright />

        </footer>
    );
};

export default Footer;