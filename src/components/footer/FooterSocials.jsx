import React from 'react';
import SocialLink from './SocialLink';

const FooterSocials = ({ footerData }) => {
    return (
        <div className='flex gap-4 items-center mt-4 md:mt-7'>
            {
                footerData.socialLinks.map((social, index) => {
                    return <SocialLink key={index} social={social} />
                })
            }
        </div>
    );
};

export default FooterSocials;