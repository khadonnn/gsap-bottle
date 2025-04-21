// components/ScrollToTopButton.tsx
'use client';
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Hàm để cuộn lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Thêm hiệu ứng cuộn mượt mà
        });
    };

    // Kiểm tra vị trí cuộn để hiển thị nút
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true); // Hiện nút khi cuộn xuống 300px
            } else {
                setIsVisible(false); // Ẩn nút khi cuộn lên trên
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Dọn dẹp event listener khi component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className='z-[9999] fixed bottom-8 right-8 bg-highlight-green text-black p-3 rounded-full shadow-lg transition-opacity duration-300 hover:opacity-70 border border-gray-500/20'
            >
                ↑
            </button>
        )
    );
};

export default ScrollToTopButton;
