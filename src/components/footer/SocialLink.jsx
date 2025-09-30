import Link from 'next/link';
import React from 'react';

const SocialLink = ({ social }) => {
    return (
        <Link href={social.url}>
            <img src={social.icon} alt="" />
        </Link>
    );
};

export default SocialLink;