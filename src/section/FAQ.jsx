import Accordion from '@/components/Accordion/Accordion';
import Section from '@/components/layout/Section';
import SectionTitle from '@/components/layout/SectionTitle';
import { faqData } from '@/data/faqData';

const FAQ = () => {
    return (
        <Section>
            <SectionTitle>{faqData.title}</SectionTitle>

            <Accordion data={faqData} />
        </Section>
    );
};

export default FAQ;