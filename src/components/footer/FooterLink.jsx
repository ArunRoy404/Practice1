import Link from 'next/link';

const FooterLink = ({ link }) => {
    return (
        <Link
            className='text-secondary text-sm'
            href={link.href}>
            {link.name}
        </Link>
    );
};

export default FooterLink;