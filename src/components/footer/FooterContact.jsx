import React from 'react';

const FooterContact = ({ contactInfo }) => {
    return (
        <div>
            <h2 className='mb-4 md:mb-5'>{contactInfo.title}</h2>

            <div className='space-y-4 md:space-y-5'>
                {
                    contactInfo.links.map((link, index) => {
                        return <div key={index} className='flex items-center gap-3'>
                            <img src={link.icon} alt="" />
                            <p className='text-secondary text-sm font-semibold' >
                                {link.name}
                            </p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default FooterContact;