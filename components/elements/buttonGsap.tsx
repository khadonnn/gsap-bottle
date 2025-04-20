'use client';
// not use
import React, { useRef } from 'react';
import { gsap } from 'gsap';

const RippleButton: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const rippleRef = useRef<HTMLSpanElement>(null);

    const handleMouseEnter = (e: React.MouseEvent) => {
        const button = btnRef.current!;
        const ripple = rippleRef.current!;

        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.killTweensOf(ripple); // 👈 Quan trọng để reset ripple cũ

        gsap.set(ripple, {
            top: y,
            left: x,
            transform: 'translate(-50%, -50%) scale(0)',
            opacity: 0.7,
            display: 'block',
        });

        gsap.to(ripple, {
            scale: 3,
            duration: 1,
            ease: 'power2.out',
        });
    };

    const handleMouseLeave = () => {
        const ripple = rippleRef.current!;
        gsap.to(ripple, {
            opacity: 0,
            duration: 0.4,
            ease: 'power3.out',
        });
    };

    return (
        <button
            ref={btnRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden cursor-pointer ${className}`}
        >
            <span
                ref={rippleRef}
                className='pointer-events-none absolute w-30 h-24 bg-gray-300 opacity-0 rounded-full mix-blend-soft-light origin-center'
            />
            {children}
        </button>
    );
};

export default RippleButton;
