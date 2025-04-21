import Image from 'next/image';
import React from 'react';
import { locations } from '@/data/mock.json';
import Button from '@/components/elements/button';
import Section from '@/components/layouts/section';
import Container from '@/components/layouts/container';

const Locations = () => {
    return (
        <Section className='relative '>
            <Image
                src='/images/location1.jpg'
                alt=''
                fill
                className='object-cover blur object-top'
            />
            <Container className='relative  rounded-3xl'>
                <div
                    className='grid sm:grid-cols-2 gap-6 scroll-mt-40 bg-zinc-900/70 rounded-3xl p-4'
                    id='activities'
                >
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-section font-coolvetica text-white'>
                            Our Activities
                        </h2>
                        <p className='text-white font-satoshi'>
                            Workshop: Get hands-on in our cozy crafting corner —
                            a space to relax, create, and connect. Handcrafted
                            Candles: Pour your own candle with custom scents and
                            take home a little glow of the night. Unique Vases:
                            Personalize ceramic vases with paints and patterns —
                            no two pieces alike! Sustainable Crafts: Create
                            beautiful keepsakes using upcycled materials — fun,
                            mindful, and earth-friendly.
                        </p>
                        <Button className='w-fit'>JOIN with us </Button>
                    </div>
                    <div className='grid sm:grid-cols-2 gap-6'>
                        {locations.map((item, index) => {
                            return (
                                <div
                                    className='flex flex-col gap-3 text-white'
                                    key={index}
                                >
                                    <div className='relative sm:h-[120px] h-[150px] shadow-2xl rounded-3xl overflow-hidden'>
                                        <Image
                                            src={item.image}
                                            alt=''
                                            fill
                                            className='object-cover'
                                        />
                                    </div>
                                    <h3 className='text-sub-title font-coolvetica font-bold tracking-wide'>
                                        {item.name}
                                    </h3>
                                    <p>{item.address}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
            ;
        </Section>
    );
};

export default Locations;
