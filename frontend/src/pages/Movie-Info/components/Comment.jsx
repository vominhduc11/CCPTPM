import { useState } from "react";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const MovieInfo = () => {
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
            
            {/* Bình Luận */}
            <div className="max-w-3xl mx-auto p-4 bg-gray-800 text-white shadow-lg rounded-lg">
                <h2 className="text-xl font-semibold mb-4">259 BÌNH LUẬN</h2>
                <div className="flex mb-4">
                    <img
                        src="https://bootdey.com/img/Content/user_1.jpg"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <textarea
                        className="flex-1 border border-gray-700 bg-gray-600 rounded-lg p-2 resize-none"
                        placeholder="Viết bình luận..."
                        rows="3"
                    ></textarea>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full">
                    Đăng
                </button>
                <hr className="my-4 border-gray-600" />
                <ul className="space-y-4">
                    {[
                        {
                            name: "@Luân Hồi Điện Chủ",
                            date: "1 năm trước",
                            comment:
                                "Đạo Huyền Sư – Phim Xuyên Không nhé cả nhà hữu...",
                        },
                        {
                            name: "@Đại Thần",
                            date: "7 ngày trước",
                            comment:
                                "Phim này có truyện không? Đợi tiếp mỏi mòn...",
                        },
                        {
                            name: "@Hoàng Đạo Hữu",
                            date: "26 ngày trước",
                            comment: "Đang hay lại hết chân thật.",
                        },
                        {
                            name: "@Trần Hoàng Thế Tâm",
                            date: "1 tháng trước",
                            comment: "Phim hay vầy mà lâu không ra phần mới.",
                        },
                    ].map((user, index) => (
                        <li key={index} className="flex">
                            <img
                                src={`https://bootdey.com/img/Content/user_${
                                    index + 2
                                }.jpg`}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full mr-3"
                            />
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <strong className="text-blue-400">
                                        {user.name}
                                    </strong>
                                    <span className="text-gray-400 text-sm">
                                        {user.date}
                                    </span>
                                </div>
                                <p className="text-gray-300 mt-1">
                                    {user.comment}
                                </p>
                                <div className="flex items-center mt-2">
                                    <span className="text-yellow-400 mr-2">
                                        0
                                    </span>
                                    <button className="flex items-center text-blue-400 hover:text-blue-600 transition-colors">
                                        <i className="fas fa-thumbs-up mr-1"></i>
                                        Like
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MovieInfo;
