'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FC, ReactNode } from 'react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

type TextSplitProps = {
    children: ReactNode;
    className?: string;
};

const TextSplit: FC<TextSplitProps> = ({ children, className = '' }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const textRef = useRef<any>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return; // Check that we are in the client-side

        if (!textRef.current) return;

        const split = new SplitText(textRef.current, {
            types: 'chars',
        });

        const tl = gsap.timeline({ paused: true });

        tl.from(split.chars, {
            // Fixed: `chars` instead of `words`
            yPercent: 100,
            opacity: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: 'back.out(1.7)',
        });

        ScrollTrigger.create({
            trigger: textRef.current,
            start: 'top 80%',
            onEnter: () => tl.play(),
            onLeaveBack: () => {
                tl.pause();
                tl.progress(0);
            },
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []); // Ensure effect runs only once after initial render

    return (
        <div ref={textRef} className={`${className} opacity-0`} data-text>
            {children}
        </div>
    );
};

export default TextSplit;
