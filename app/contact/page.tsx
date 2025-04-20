import Form from '@/components/elements/form';
import Container from '@/components/layouts/container';
import Section from '@/components/layouts/section';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type SocialType = {
    heading?: string;
    cta?: string;
};

const page = () => {
    // ✨ Dữ liệu tĩnh thay cho fetch từ Sanity
    const hero = {
        heading: 'Contact Us',
        tagline: 'We would love to hear your bottle story.',
        heroImage: '/images/aboutus.jpg',
    };

    const socials: { ourSocials: SocialType[] } = {
        ourSocials: [
            { heading: 'Instagram', cta: 'https://instagram.com' },
            { heading: 'Facebook', cta: 'https://facebook.com' },
        ],
    };

    return (
        <Section className='sm:py-0 overflow-hidden'>
            <Container>
                <div className='grid sm:grid-cols-2 w-full items-center justify-between'>
                    <div className=''>
                        <div className='mb-12'>
                            <h1 className='uppercase text-hero font-coolvetica'>
                                {hero.heading}
                            </h1>
                            <p>{hero.tagline}</p>
                            <div className='flex gap-6 mt-6'>
                                {socials.ourSocials.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.cta || '/'}
                                        className='underline'
                                    >
                                        {social.heading}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <Form />
                    </div>
                    <div className='hidden sm:block relative h-full -mr-24'>
                        <Image
                            src={'/images/contact.avif'}
                            alt=''
                            fill
                            className='object-cover pl-12 h-full w-full object-top'
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default page;
