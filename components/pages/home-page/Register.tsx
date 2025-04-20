import Button from '@/components/elements/button';
import Container from '@/components/layouts/container';
import Section from '@/components/layouts/section';
import Link from 'next/link';
import React from 'react';

const Register = () => {
    return (
        <Section className='w-screen relative z-20 py-32 bg-black'>
            <Container className=' flex md:flex-row flex-col  justify-between md:items-center'>
                <h2 className='text-white xl:w-2/4 font-coolvetica text-section uppercase'>
                    let’s experience journey together
                </h2>
                <div className='flex flex-col gap-3 '>
                    <p className='text-white/60 ml-1'>Stay up to date</p>
                    <div className='flex '>
                        {/* <Input placeholder='Register here!' /> */}
                        <Link href='/contact' passHref>
                            <Button asChild>
                                <a>Join with us</a>
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Register;
