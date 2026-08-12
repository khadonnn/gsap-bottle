import Button from '@/components/elements/button';
import Container from '@/components/layouts/container';
import Section from '@/components/layouts/section';
import Coaches from '@/components/pages/home-page/Coaches';
import Image from 'next/image';
import React from 'react';

const AboutUsPage = async () => {
    return (
        <React.Fragment>
            <Section className=''>
                <Container>
                    <div className='text-center'>
                        <h1 className='text-hero font-coolvetica uppercase relative'>
                            ABOUT US
                        </h1>
                        <div className='-mt-20'>
                            <Image
                                src={'/images/actions.avif'}
                                alt='Rally images'
                                width={450}
                                height={450}
                                className='w-full h-full rounded-3xl'
                            />
                        </div>
                        <div className='text-center w-full flex-col flex items-center mt-12'>
                            <p className='mb-6 sm:w-3/4'>Hand make</p>
                            <Button>JOIN US</Button>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className='relative'>
                <Image
                    src='/images/about1.jpg'
                    alt=''
                    fill
                    className='object-cover'
                />
            </Section>
            <Coaches />
        </React.Fragment>
    );
};

export default AboutUsPage;
