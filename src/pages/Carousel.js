import React, { useState } from 'react';
import ProductCard from '../component/ProductCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Carousel = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsInView = 4;

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - cardsInView : prevIndex - 1));
    };

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === products.length - cardsInView ? 0 : prevIndex +1));
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div 
                className="flex gap-4 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }} // Adjusted to percentage
            >
                {products.slice(currentIndex, currentIndex + cardsInView).map((product, index) => (
                    <div key={index} style={{ flex: `0 0 25%` }}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2" onClick={prevCard}>
                <ChevronLeftIcon className="h-8 w-8 text-gray-600" />
            </button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2" onClick={nextCard}>
                <ChevronRightIcon className="h-8 w-8 text-gray-600" />
            </button>
        </div>
    );
};

export default Carousel;
