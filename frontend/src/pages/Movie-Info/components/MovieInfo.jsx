import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SpiderMan from '../../../assets/img/Banner/SpiderMan.jpg';
export default function MovieInfo(){
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
    return(
        <div className="w-full flex flex-col md:flex-row justify-center gap-6 mb-8 px-[100px] py-[80px]">
            {/* Movie Info */}
            <div className="w-full md:w-2/5 relative">
                <img
                    src={SpiderMan}
                    alt="Movie"
                    className="w-full h-[700px] rounded-3xl shadow-md object-cover"
                />
                <button
                    onClick={handleSaveClick}
                    className={`absolute top-3 right-3 md:top-4 md:right-4 p-3 rounded-full shadow-lg transition-colors duration-300 ${
                        isSaved
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                    title={isSaved ? "Saved" : "Save"}
                    style={{
                        backdropFilter: "blur(4px)", // Làm mờ nền phía sau nút
                        backgroundColor: "rgba(255, 255, 255, 0.6)", // Nền bán trong suốt
                    }}
                >
                    <FontAwesomeIcon
                        icon={faBookmark}
                        className="h-5 w-5"
                    />
                </button>
            </div>

            <div className="w-full md:w-3/5 p-3">
                <div className="p-3 text-5xl font-extrabold text-blue-400 font-nunito">
                    <p>Tên Phim</p>
                </div>
                <div className="p-3 text-base font-semibold text-blue-200 flex items-center gap-3">
                    <p>Year</p>
                    <p>&#8226;</p>
                    <p>Duration</p>
                </div>
                <div className="p-3">
                    {["Thể loại 1", "Thể loại 2", "Thể loại 3"].map(
                        (genre, index) => (
                            <a
                                key={index}
                                href="!#"
                                className="p-1 m-1 rounded-md text-white bg-slate-600 hover:bg-blue-500 transition-colors duration-200 px-6 py-2"
                            >
                                {genre}
                            </a>
                        )
                    )}
                </div>
                <div className="p-4 flex items-center gap-4">
                    <p className="text-lg font-medium text-white">
                        Đánh giá: 4.5
                        <FontAwesomeIcon
                            className="text-yellow-500"
                            icon={faStar}
                        />
                    </p>
                </div>
                <div className="p-2">
                    <p className="font-nunito font-bold text-xl text-white">
                        Danh sách tập:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3">
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
                <div className="p-2 flex flex-col gap-6">
                    <button
                        onClick={handleWatchNowClick}
                        className="w-1/4 bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 active:scale-95 transition duration-300 animate-pulse"
                    >
                        <span className="mr-1">Xem Phim Nào </span>
                        <FontAwesomeIcon icon={faPlay} />
                    </button>
                    <p className="w-1/2 font-nunito text-slate-200 font-bold p-4">
                        Hoặc bạn muốn cùng xem với bạn bè?
                    </p>
                    <button
                        onClick={handleWatchNowClick}
                        className="w-1/4 bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 active:scale-95 transition duration-300 animate-pulse"
                    >
                        <span className="mr-1">Tạo Phòng Nè</span>
                        <FontAwesomeIcon icon={faPlay} />
                    </button>
                </div>
            </div>
        </div>
    )
}