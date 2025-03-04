export default function Card(props){
    return (
        <div className="mt-8 ">
            <ul className="mt-4">
                <li className="mb-4">
                    <div className="relative rounded-lg border border-solid shadow-lg bg-gradient-to-r from-slate-500 to-blue-700 ">
                        <div className="flex item-start justify-between gap-6 p-4">
                            {/* Hình Phim  */}
                            <div className="flex items-center">
                                <a className="block h-[8rem] w-[10rem]"   target="_blank" href="">  
                                    <img src={props.src} style={{objectFit:"cover"}} alt="" loading="lazy" width="160" height="140" decoding="async" className="h-28 w-40 max-w-full rounded-xl bg-white "
                                />  
                                </a>
                            </div>

                            {/* CONTENT */}
                            <div className="flex-1">
                                <h3 className="line-clamp-1">
                                    <a target="_blank" className="text-md text-lg font-bold transistion transition-all text-primary" href="">{props.name}</a>
                                </h3>
                               
                                <div className="mt-2 flex items-center justify-start gap-5">
                                    {/* <div className="text-primary">
                                        <p>
                                            <span className="text-md cursor-pointer transition-all hover:text-primary">{props.salary}</span>
                                        </p>
                                    </div> */}
                                    {/* <div className="text-gray-600">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z"></path>
                                        </svg>
                                    </div> */}
                                    {/* <div>
                                        <p className="text-md text-gray-500">{props.require_of_year}</p>
                                    </div> */}
                                </div>
                                <div className="text-md flex flex-wrap items-end gap-2 text-black font-nunito font-medium">
                                    <p>Đang có</p>
                                    <p>
                                        4 
                                    </p>
                                    <p>Người Xem phim</p>
                                </div>
                                <div className="mt-2">
                                    <ul className=" ml-6 list-disc text-black">
                                        <li className="text-md">Người Tạo: </li>
                                        <li className="text-md">Vip</li>
                                    </ul>
                                </div>
                                <hr className="mt-2 h-px w-full bg-gray-200"/>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="line-clamp-1">
                                        <a className="mr-2 inline-block"  href="">
                                        <span className="whitespace-nowrap rounded border text-md transition-all inline-flex items-center justify-center border-solid font-semibold
                                            border-primary hover:border-blue-dark h-[1.625rem] px-2 text-xs md:h-7 md:px-2 md:text-sm bg-slate-300 shadow-xl">Romance</span>
                                        </a>
                                        <a className="mr-2 inline-block"  href="">
                                        <span className="whitespace-nowrap rounded border text-md transition-all inline-flex items-center justify-center border-solid font-semibold
                                            border-primary hover:border-blue-dark h-[1.625rem] px-2 text-xs md:h-7 md:px-2 md:text-sm bg-slate-300 shadow-xl">4K</span>
                                        </a>
                                        <a className="mr-2 inline-block"  href="">
                                        <span className="whitespace-nowrap rounded border text-md transition-all inline-flex items-center justify-center border-solid font-semibold
                                            border-primary hover:border-blue-dark h-[1.625rem] px-2 text-xs md:h-7 md:px-2 md:text-sm bg-slate-300 shadow-xl">18+</span>
                                        </a>
                                    </div>

                                    <p className="whitespace-nowrap text-md text-gray-400">
                                        Đã tạo 1 ngày trước
                                    </p>
                                </div>
                            </div>
                            <div className="w-fit" data-testid="flowbite-tooltip-target">
                                <button role="button" aria-label="Follow button">
                                    <span className="text-gray cursor-pointer select-none text-xl leading-none">
                                        <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                            </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </li>
            </ul>


        </div>
    )
}