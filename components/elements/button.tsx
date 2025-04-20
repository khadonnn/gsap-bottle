'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { tv } from 'tailwind-variants';
import cx from 'clsx';

// Tailwind Variants setup
const button = tv({
    base: 'font-satoshi rounded-full uppercase py-3 duration-300 relative overflow-hidden cursor-pointer',
    variants: {
        color: {
            primary: 'bg-highlight-green  hover:text-white',
            secondary:
                'bg-transparent text-gray-700 hover:bg-emerald-800 hover:text-white border',
        },
        size: {
            sm: 'px-4 text-sm',
            md: 'px-6 text-base',
            lg: 'px-8 text-lg',
        },
        fullWidth: {
            true: 'w-full',
            false: '',
        },
    },
    compoundVariants: [
        {
            color: 'primary',
            size: 'sm',
            class: 'hover:bg-green-600 text-white',
        },
        {
            color: 'secondary',
            size: 'lg',
            class: 'border-2',
        },
    ],
    defaultVariants: {
        color: 'primary',
        size: 'md',
        fullWidth: false,
    },
});

// Button Props
type ButtonProps = {
    children: React.ReactNode;
    color?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    onClick?: () => void;
    className?: string;
    asChild?: boolean;
};

// Button component with GSAP ripple effect
const Button: React.FC<ButtonProps> = ({
    children,
    color = 'primary',
    size = 'md',
    fullWidth = false,
    onClick,
    className,
}) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const rippleRef = useRef<HTMLSpanElement>(null);

    const buttonClass = button({ color, size, fullWidth });

    const handleMouseEnter = (e: React.MouseEvent) => {
        const button = btnRef.current!;
        const ripple = rippleRef.current!;

        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.killTweensOf(ripple);

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
            onClick={onClick}
            className={cx(buttonClass, className)}
        >
            <span
                ref={rippleRef}
                className='pointer-events-none absolute w-32 h-32 bg-green-900 opacity-0 rounded-full  origin-center  z-0'
            />
            <span className='relative z-10'>{children}</span>
        </button>
    );
};

export default Button;
