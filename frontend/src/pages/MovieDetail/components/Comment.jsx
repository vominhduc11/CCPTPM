export default function Comment() {
    return (
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
    );
}