import Accordion from '@/components/Accordion/Accordion';
import SectionTitle from '@/components/layout/SectionTitle';
import { faqData } from '@/data/faqData';

const FAQ = () => {
    return (
     <div className='transition-all duration-300 max-w-[1360px] mx-auto px-4 md:px-10 py-8 md:py-10 lg:py-[120px]'>
         <SectionTitle>{faqData.title}</SectionTitle>

         <Accordion data={faqData} />
     </div>
    
    );
};

export default FAQ;