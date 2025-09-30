import React from 'react';
import FooterLink from './FooterLink';

const FooterLinks = ({ title, links }) => {

    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }
    const columns = chunkArray(links, 4);

    return (
        <div>
            <h3 className='mb-4 text-secondary text-sm font-semibold' >{title}</h3>

            <div className='flex space-x-10'>
                {
                    columns.map((column, index) => {
                        return <div key={index} className='grid gap-4 grid-cols-1 '>
                            {
                                column.map((link, index) => {
                                    return <FooterLink key={index} link={link} />
                                })
                            }
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default FooterLinks;