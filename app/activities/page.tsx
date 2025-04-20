'use client';

import Section from '@/components/layouts/section';
import Container from '@/components/layouts/container';
import Image from 'next/image';
import Hero from '@/components/pages/activities/Hero';
import React, { useState } from 'react';

const hero = {
    title: 'Welcome to Our Fitness Center',
    subtitle: 'Stay Strong. Stay Healthy.',
    image: '/images/hero-fitness.jpg',
};

const sectionHighlight = {
    heading: 'Top-notch Equipment & Facilities',
    tagline: 'Everything you need to crush your goals.',
};

const facilities = {
    heading: 'Our Results',
    ourFacilities: [
        {
            image: '/images/img-one.jpg',
            heading: 'Weight Room',
            tagline: 'Lift heavy, get strong',
        },
        {
            image: '/images/home.jpg',
            heading: 'Yoga Studio',
            tagline: 'Stretch & Breathe',
        },
        {
            image: '/images/img-one1.jpg',
            heading: 'Swimming Pool',
            tagline: 'Dive into fitness',
        },
    ],
};

type FacilitiType = {
    image?: string;
    heading?: string;
    tagline?: string;
};

const FitnessPage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    return (
        <React.Fragment>
            <Hero hero={hero} highlight={sectionHighlight} />
            <Section>
                <Container className='h-full w-full relative'>
                    <div>
                        <h2 className='font-coolvetica relative z-10 uppercase font-bold text-hero leading-none text-center'>
                            {facilities.heading}
                        </h2>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 mt-12 gap-12'>
                        {facilities.ourFacilities.map(
                            (faciliti: FacilitiType, index: number) => (
                                <div key={index}>
                                    <div
                                        className='relative drop-shadow-sm hover:drop-shadow-lg hover:scale-105  transition-transform duration-300 aspect-square rounded-3xl overflow-hidden flex items-end cursor-pointer border'
                                        onClick={() =>
                                            setSelectedImage(
                                                faciliti?.image || '',
                                            )
                                        }
                                    >
                                        <Image
                                            src={faciliti?.image || ''}
                                            alt=''
                                            fill
                                            className='object-cover object-top'
                                        />
                                        <div className='relative p-6 bg-white w-full'>
                                            <h3 className='font-coolvetica text-title'>
                                                {faciliti.heading}
                                            </h3>
                                            <span className='bg-highlight-green rounded-full px-2 py-1'>
                                                {faciliti.tagline}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ),
                        )}
                        {selectedImage && (
                            <div
                                className='fixed inset-0 bg-black bg-opacity-[98%] z-50 flex items-center justify-center'
                                onClick={() => setSelectedImage(null)}
                            >
                                <div className='relative w-full h-full'>
                                    <Image
                                        src={selectedImage}
                                        alt='Full screen'
                                        fill
                                        className='object-contain cursor-zoom-out'
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </Container>
            </Section>
        </React.Fragment>
    );
};

export default FitnessPage;
