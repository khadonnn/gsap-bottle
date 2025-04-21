'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { useGSAP } from '@gsap/react';
import Button from '@/components/elements/button';
import Section from '@/components/layouts/section';
import Container from '@/components/layouts/container';
import Link from 'next/link';

const Rally = () => {
    const imageWrapRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        gsap.to(imageRef.current, {
            scrollTrigger: {
                scroller: 'body',
                trigger: imageWrapRef.current,
                scrub: true,
                start: '-100% top',
                end: '-80% top',
                toggleActions: 'play reverse play reverse',
            },
            scale: 1,
            borderRadius: 30,
        });
    }, []);
    return (
        <Section className='py-24 border-b'>
            <Container className=' flex flex-col gap-6 justify-center items-center'>
                <h2 className='font-coolvetica leading-none z-20 text-hero text-center'>
                    Ready to
                    <br />
                    JOIN?
                </h2>
                <div
                    className='sm:h-[600px] h-[450px] -mt-20 relative w-full'
                    ref={imageWrapRef}
                >
                    <Image
                        ref={imageRef}
                        src='/images/rally1.avif'
                        alt='Rally images'
                        fill
                        className='w-full h-full scale-150'
                    />
                </div>
                <Link href={'/contact'}>
                    <Button
                        color='secondary'
                        className='bg-white text-black border-zinc-800 shadow-lg'
                        fullWidth
                    >
                        Join our community
                    </Button>
                </Link>
            </Container>
        </Section>
    );
};

export default Rally;
