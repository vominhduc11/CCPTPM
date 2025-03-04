import { useState } from "react";
import { Spin } from "antd";
import Pagination from "@mui/material/Pagination";
import Card from './Card';
import SpiderMan from '../../../assets/img/Banner/SpiderMan.jpg';
export default function Tab() {
    const [tab, setTab] = useState(0);
    const [page, setPage] = useState(1);
    // const [contentOfJobs, setContentOfJobs] = useState([]);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const contentOfJobs = [
        {
            id: 1,
            title: "Frontend Developer",
            require_of_year: "2 years",
            benefits: "Bonus, Remote work",
            requirements: "React, TypeScript",
            salary: "$1500 - $2000",
            responsibilities: "Build UI, Collaborate with backend team",
            src: SpiderMan
        },
        {
            id: 2,
            title: "Backend Developer",
            require_of_year: "3 years",
            benefits: "Flexible hours, Stock options",
            requirements: "Node.js, Express, MongoDB",
            salary: "$1800 - $2500",
            responsibilities: "Develop APIs, Maintain database",
            src: SpiderMan
        },
        {
            id: 3,
            title: "Full Stack Developer",
            require_of_year: "4 years",
            benefits: "Health insurance, Gym membership",
            requirements: "React, Node.js, GraphQL",
            salary: "$2000 - $3000",
            responsibilities: "Develop full-stack applications",
            src: SpiderMan
        },
        {
            id: 4,
            title: "DevOps Engineer",
            require_of_year: "5 years",
            benefits: "AWS credits, Learning budget",
            requirements: "Docker, Kubernetes, CI/CD",
            salary: "$2500 - $3500",
            responsibilities: "Manage cloud infrastructure",
            src: SpiderMan
        },
        {
            id: 5,
            title: "Data Scientist",
            require_of_year: "3 years",
            benefits: "Flexible working, Conference budget",
            requirements: "Python, Machine Learning, SQL",
            salary: "$2200 - $3200",
            responsibilities: "Analyze data, Train ML models",
            src: SpiderMan
        },
    ];

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const handleTab = (index) => {
        setTab(index);
    };

    // const handleShowMore = () => {
    //     setIsLoading(true);
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 1000);
    // }

    return (
        <div className="container w-90 pl-20 pr-20">
            <div className="flex items-start bg-slate-500 rounded-b-lg">
                <div className="relative flex items-center justify-center gap-3 py-2 px-6 hover:bg-slate-600">
                    <button
                        onClick={() => handleTab(3)}
                        className={`px-5 py-2 rounded-t-lg font-nunito  ${
                            tab === 3 ? "text-white bg-primary-400 border-b-2" : "text-gray-700"
                        }`}
                    >
                        Giới Thiệu Phim
                    </button>
                </div>
                <div className="relative flex items-center justify-center gap-3 py-2 px-6 font-bold hover:bg-slate-600">
                    <button
                        onClick={() => handleTab(0)}
                        className={`px-5 py-2 rounded-t-lg font-nunito ${
                            tab === 0 ? "text-white bg-primary-400 border-b-2" : "text-gray-600 "
                        }`}
                    >
                        Phòng Đang Có
                    </button>
                </div>
                <div className="relative flex items-center justify-center gap-3 py-2 px-6 hover:bg-slate-600">
                    <button
                        onClick={() => handleTab(1)}
                        className={`px-5 py-2 rounded-t-lg font-nunito ${
                            tab === 1 ? "text-white bg-primary-400 border-b-2" : "text-gray-700"
                        }`}
                    >
                        Phòng Bạn Đã Tạo
                    </button>
                </div>
            </div>
            {tab === 3 && (
                <div className="bg-gray-light py-2 flex justify-center w-100 min-h-80">
                    <p className="bg-slate-600 p-4 font-nunito font-medium text-slate-400 text-[16px]">
                        Bị cắn bởi một con nhện phóng xạ, khả năng giống nhện của Peter Parker mang lại cho anh những sức mạnh tuyệt vời mà anh sử dụng để giúp đỡ người khác, trong khi cuộc sống cá nhân của anh gặp phải nhiều trở ngại.
                    </p>
                </div>
            )}
            {tab === 0 && (
                <div className="bg-gray-light py-2 flex justify-center">
                    <div className="container">
                        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6">
                            <div className="col-span-2">
                                <div>
                                    <Spin spinning={isLoading}>
                                        {contentOfJobs.map((item) => (
                                            <Card key={item.id} name={item.title} require_of_year = {item.require_of_year}
                                                benefits = {item.benefits} requirements = {item.requirements} salary = {item.salary}
                                                responsibilities = {item.responsibilities} src={item.src}/>
                                        ))}
                                    </Spin>
                                </div>
                                <div className="mx-auto mt-4 text-center sm:max-lg:w[238px]">
                                        <Pagination
                                            count={total}
                                            page={page}
                                            onChange={handleChangePage}
                                            variant="outlined"
                                            shape="rounded"
                                            sx={{ marginTop: 1, display: "flex", justifyContent: "end" }}
                                        />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div>
                                    <section className="rounded pt-8 border-orange-400 ">
                                        <div className="rounded-tl rounded-tr border-b border-solid bg-orange-400 px-4 py-2">
                                            <h2 className="text-lg font-semibold">Phim Đang Nổi</h2>
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
                                                                    className="h-28 w-40 max-w-full rounded-xl bg-white"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="flex-1 ">
                                                            <h3 className="line-clamp-1 text-sm font-bold md:text-lg">
                                                                <a className="transition hover:text-primary" target="_blank" href="">
                                                                    Full-Stack Developer
                                                                </a>
                                                            </h3>
                                                            <div className="line-clamp-1">
                                                                <a
                                                                    target="_blank"
                                                                    className="text-sm text-gray-500 transition-all hover:text-primary md:text-base"
                                                                    href=""
                                                                >
                                                                    SALESCORE
                                                                </a>
                                                            </div>
                                                            <div className="mt-2 flex items-end">
                                                                <div className="line-clamp-1">
                                                                    <a className="mr-2 inline-block" href="">
                                                                        <span className="whitespace-nowrap rounded border text-md font-normal transition-all inline-flex items-center justify-center border-solid hover:border-blue-dark h-[1.625rem] px-2 text-xs md:h-7 md:px-2 md:text-sm bg-blue-100 text-blue-500">
                                                                            JavaScript
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
                    </div>
                </div>
            )}
            {tab === 1 && (
                <div className="bg-gray-light py-2 flex justify-center">
                    <div className="container">
                        <div className="flex justify-center gap-6 min-w-full">
                            <div className="col-span-2 min-w-[750px]">
                                <div>
                                    <Spin spinning={isLoading}>
                                        {contentOfJobs.map((item) => (
                                            <Card key={item.id} name={item.title} require_of_year = {item.require_of_year}
                                                benefits = {item.benefits} requirements = {item.requirements} salary = {item.salary}
                                                responsibilities = {item.responsibilities} src={item.src}/>
                                        ))}
                                    </Spin>
                                </div>
                                <div className="mx-auto mt-4 text-center sm:max-lg:w[238px]">
                                        <Pagination
                                            count={total}
                                            page={page}
                                            onChange={handleChangePage}
                                            variant="outlined"
                                            shape="rounded"
                                            sx={{ marginTop: 1, display: "flex", justifyContent: "end" }}
                                        />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}