import { useState } from "react";
import { useRef, useEffect } from "react";
export default function RelatedFilm(){
    const products = [
        {
            id: 1,
            title: "Product 1",
            rating: "4.5",
            image: "https://i.pinimg.com/564x/01/53/e7/0153e77057ca8f0f2736c2871bc2438c.jpg",
        },
        {
            id: 2,
            title: "Product 2",
            rating: "4.0",
            image: "https://i.pinimg.com/564x/01/53/e7/0153e77057ca8f0f2736c2871bc2438c.jpg",
        },
        {
            id: 3,
            title: "Product 3",
            rating: "4.2",
            image: "https://i.pinimg.com/564x/01/53/e7/0153e77057ca8f0f2736c2871bc2438c.jpg",
        },
        {
            id: 4,
            title: "Product 4",
            rating: "3.8",
            image: "https://i.pinimg.com/564x/01/53/e7/0153e77057ca8f0f2736c2871bc2438c.jpg",
        },
        {
            id: 5,
            title: "Product 5",
            rating: "4.9",
            image: "https://i.pinimg.com/564x/01/53/e7/0153e77057ca8f0f2736c2871bc2438c.jpg",
        },
        {
            id: 6,
            title: "Product 6",
            rating: "4.7",
            image: "https://i.pinimg.com/564x/01/53/e7/0153e77057ca8f0f2736c2871bc2438c.jpg",
        },
        // Add more products as needed
    ];

    const sliderRef = useRef(null);

    const scrollLeftHandler = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRightHandler = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };
return (
        <div className="relative px-8 py-4 bg-slate-700 w-full">
            <h1 className="my-4 text-blue-500 font-bold text-3xl">Những Phim Liên Quan</h1>
            <button
                onClick={scrollLeftHandler}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10"
            >
                &#8592;
            </button>
            <button
                onClick={scrollRightHandler}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10"
            >
                &#8594;
            </button>
            <div
                ref={sliderRef}
                className="flex overflow-x-scroll scroll-smooth scrollbar-hide"
                style={{ scrollSnapType: "x mandatory" }}
            >
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] mx-2"
                        style={{ scrollSnapAlign: "start" }}
                    >
                        <div className="bg-slate-800 rounded-md shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <div className="overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-80 h-full object-cover transition-transform transform hover:scale-110"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-white">
                                    {product.title}
                                </h2>
                                <p className="text-bs text-white">
                                    Đánh giá: {product.rating}{" "}
                                    <FontAwesomeIcon
                                        className="text-yellow-500"
                                        icon={faStar}
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );  
}