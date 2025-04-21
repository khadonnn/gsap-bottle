'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from '@/components/pages/home-page/Hero';
import Register from '@/components/pages/home-page/Register';
import Coaches from '@/components/pages/home-page/Coaches';
import Locations from '@/components/pages/home-page/Locations';
import Rally from '@/components/pages/home-page/Rally';
import FAQ from '@/components/pages/home-page/FAQ';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const registerRef = useRef<HTMLDivElement>(null);
    const coachesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const register = registerRef.current;
        const coaches = coachesRef.current;
        if (!section || !register || !coaches) {
            console.log('section, register, or coaches is null');
            return;
        }

        const ctx = gsap.context(() => {
            // Tạo hiệu ứng parallax cho Register trước khi stick
            gsap.to(register, {
                yPercent: 30, // Dịch chuyển chậm hơn để tạo parallax
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: () => `+=${register.offsetHeight}`, // Kết thúc khi Register chạm đỉnh viewport
                    scrub: true,
                },
            });

            // Làm Register stick khi chạm đỉnh viewport
            ScrollTrigger.create({
                trigger: register,
                start: 'top top',
                end: () => `+=${coaches.offsetHeight}`, // Stick cho đến khi coaches đi qua
                pin: true, // Giữ Register tại chỗ
                pinSpacing: false, // Không tạo khoảng trống khi pin
                anticipatePin: 1,
            });

            // Hiệu ứng cho Coaches xuất hiện và đè lên
            gsap.fromTo(
                coaches,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: coaches,
                        start: 'top 80%', // Coaches xuất hiện khi gần vào viewport
                        end: 'top 20%',
                        scrub: 1,
                    },
                },
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Hero />
            <div ref={sectionRef} className='relative'>
                <div
                    ref={registerRef}
                    className='h-screen will-change-transform z-0 sticky top-0'
                >
                    <Register />
                </div>
                <div
                    ref={coachesRef}
                    className='relative bg-white rounded-3xl will-change-transform z-10'
                >
                    <Coaches />
                    <Locations />
                    <FAQ />
                    <Rally />
                </div>
            </div>
        </>
    );
}
