import Section from '@/components/layout/Section';
import SectionDescription from '@/components/layout/SectionDescription';
import SectionTitle from '@/components/layout/SectionTitle';
import ButtonCTA from '@/components/ui/ButtonCTA';
import { ctaData } from '@/data/ctaData';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const CTA = () => {
    return (
        <Section>
            <div className='bg-[rgba(0,88,255,1)] rounded-3xl p-4 md:p-10 lg:py-20'>
                <SectionTitle
                    className={'!text-white !mb-4 md:!mb-6 lg:!mb-8'} >
                    {ctaData.title}
                </SectionTitle>

                <SectionDescription
                    className={'text-white'}
                >
                    {ctaData.description}
                </SectionDescription>

                <div className='flex flex-col items-center'>
                    <ButtonCTA
                        icon={<ArrowRight size={24} className='ml-2' />}
                    >
                        {ctaData.button.text}
                    </ButtonCTA>
                </div>
            </div>
        </Section >
    );
};

export default CTA;