import { useState } from "react";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import SpiderMan from '../../../assets/img/Banner/SpiderMan.jpg';
const MovieDetail = () => {
    const [isSaved, setIsSaved] = useState(false);

    const handleSaveClick = () => {
        setIsSaved((prevState) => !prevState); // Chuyển đổi trạng thái lưu/hủy lưu
    };
    const handleWatchNowClick = () => {
        const videoElement = document.getElementById("movie-video");
        if (videoElement) {
            videoElement.scrollIntoView({ behavior: "smooth" });
            videoElement.play();
        }
    };
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
        {
            id: 7,
            title: "Product 6",
            rating: "4.7",
            image: "https://i.pinimg.com/564x/01/53/e7/0153e77057ca8f0f2736c2871bc2438c.jpg",
        },
        {
            id: 8,
            title: "Product 6",
            rating: "4.7",
            image: "https://i.pinimg.com/564x/01/53/e7/0153e77057ca8f0f2736c2871bc2438c.jpg",
        },
        {
            id: 9,
            title: "Product 6",
            rating: "4.7",
            image: "https://i.pinimg.com/564x/01/53/e7/0153e77057ca8f0f2736c2871bc2438c.jpg",
        },
        // Add more products as needed
    ];
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

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

    const startDrag = (e) => {
        setIsDragging(true);
        setStartX(e.pageX || e.touches[0].pageX);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const drag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX;
        const walk = (x - startX) * 2; // multiply by 2 for faster scroll
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const endDrag = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const slider = sliderRef.current;

        if (window.innerWidth <= 1024) {
            // Apply drag only on devices with width <= 1024px
            slider.addEventListener("touchstart", startDrag);
            slider.addEventListener("touchmove", drag);
            slider.addEventListener("touchend", endDrag);
        }

        return () => {
            if (window.innerWidth <= 1024) {
                slider.removeEventListener("touchstart", startDrag);
                slider.removeEventListener("touchmove", drag);
                slider.removeEventListener("touchend", endDrag);
            }
        };
    }, [isDragging, startX, scrollLeft]);
    return (
        <div className="w-full p-4 sm:p-8 md:p-12 bg-slate-800 shadow-lg">
            <div className="min-w-full flex flex-row gap-4">
                <video id="movie-video" className="w-3/4 bg-black mb-8" controls>
                    <source src="path_to_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="w-1/4">
                    <div>
                        <section className="rounded ">
                            <div className="rounded-tl rounded-tr border-b border-solid bg-slate-600 px-4 py-2 text-slate-200 font-nunito font-bold">
                                <h2 className="text-lg font-semibold">Người Đang Xem</h2>
                            </div>
                            <ul>
                                <li className="border-t border-solid border-gray-200 first:border-t-0">
                                    <div className="CardJobList block rounded bg-gradient-to-r from-slate-500 to-blue-700 p-4">
                                        <div className="flex items-start gap-2">
                                            <div className="w-100">
                                                <a className="inline-block" target="_blank" href="">
                                                    <img
                                                        src={SpiderMan}
                                                        style={{ objectFit: "cover" }}
                                                        alt=""
                                                        loading="lazy"
                                                        width="88"
                                                        height="66"
                                                        decoding="async"
                                                        className="h-20 w-20 max-w-full rounded-full bg-white"
                                                    />
                                                </a>
                                            </div>
                                            <div className="flex-1 ">
                                                <h3 className="line-clamp-1 text-sm font-bold md:text-lg">
                                                    <a className="transition hover:text-primary" target="_blank" href="">
                                                        Tên Người Dùng
                                                    </a>
                                                </h3>
                                                <div className="line-clamp-1">
                                                    <a
                                                        target="_blank"
                                                        className="text-sm text-gray-200 transition-all hover:text-primary md:text-base"
                                                        href=""
                                                    >
                                                        Online: 48h
                                                    </a>
                                                </div>
                                                <div className="mt-2 flex items-end">
                                                    <div className="line-clamp-1">
                                                        <a className="mr-2 inline-block" href="">
                                                            <span className="whitespace-nowrap text-md font-normal transition-all inline-flex items-center justify-center border-solid hover:border-blue-dark h-[1.625rem] text-sm bg-red-500 text-black px-4 hover:scale-110 rounded">
                                                                Kick
                                                            </span>
                                                        </a>
                                                        <a className="mr-2 inline-block" href="">
                                                            <span className="whitespace-nowrap rounded border text-md font-normal transition-all inline-flex items-center justify-center border-solid hover:border-blue-dark h-[1.625rem] px-2 text-xs md:h-7 md:px-2 md:text-sm bg-blue-100 text-blue-500">
                                                                JavaScript
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="border-t border-solid border-gray-200 first:border-t-0">
                                    <div className="CardJobList block rounded border border-solid border-white bg-white p-4"></div>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            {/* Danh Sách Tập */}
            <div>
                <div className="p-2">
                    <p className="text-lg font-medium text-white">
                        <FontAwesomeIcon className="mr-2" icon={faFilm} flip="horizontal" style={{ color: "#74C0FC" }} />
                        Thuyết Minh: 
                    </p>
                    <div className="grid grid-cols-10 gap-2 mt-3">
                        {Array.from({ length: 20 }).map((_, index) => (
                            <a
                                href="!#"
                                key={index}
                                className="bg-gradient-to-r from-slate-500 to-blue-700 p-2 rounded-md text-white shadow-md hover:shadow-lg transition-all duration-300 text-center hover:text-black hover:bg-stone-800"
                            >
                                <span className="text-sm font-medium">
                                    Tập {index + 1}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="p-2">
    
                    <p className="text-lg font-medium text-white">
                        <FontAwesomeIcon className="mr-2" icon={faFilm} flip="horizontal" style={{ color: "#74C0FC" }} />
                        VietSub: 
                    </p>
                    <div className="grid grid-cols-10 gap-2 mt-3">
                        {Array.from({ length: 20 }).map((_, index) => (
                            <a
                                href="!#"
                                key={index}
                                className="bg-gradient-to-r from-slate-500 to-blue-700 p-2 rounded-md text-white shadow-md hover:shadow-lg transition-all duration-300 text-center hover:text-black hover:bg-stone-800"
                            >
                                <span className="text-sm font-medium">
                                    Tập {index + 1}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            {/* Danh Sách Phim Đề Cử     */}
            <div className="relative mt-2 px-2 py-2 bg-slate-700 w-full items-center">
                <h1 className="my-4 text-blue-200 font-nunito font-bold text-3xl">Những Phim Liên Quan</h1>
                <div className="flex items-center absolute left-1/4 top-10 transform -translate-y-1/2 text-white px-4 rounded-b z-10">
                    <button
                        onClick={scrollLeftHandler}
                        className="py-2 px-4 hover:bg-blue-500 items-center rounded"
                    >
                        <FontAwesomeIcon className="w-6 h-8" icon={faCircleLeft} beat style={{color: "#74C0FC",}} />
                    </button>
                    <button
                        onClick={scrollRightHandler}
                        className="py-2 px-4 items-center rounded hover:bg-blue-500"
                    >
                        <FontAwesomeIcon className="w-6 h-8" icon={faCircleRight} beat style={{color: "#74C0FC",}} />
                    </button>
                </div>
                <div
                    ref={sliderRef}
                    className="flex overflow-x-scroll scroll-smooth scrollbar-hide"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="min-w-[200px] mx-2"
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
                                    <h2 className="text-xl font-semibold text-white ">
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
            
        </div>
    );
};

export default MovieDetail;
