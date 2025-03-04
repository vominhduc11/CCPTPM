import PropTypes from "prop-types";
import { useEffect } from "react";
import Tab from './components/Tab';
import MovieInfo from './components/MovieInfo';
Movie_Detail.propTypes = {
    title: PropTypes.string,
};
export default function Movie_Detail(props) {
    const { title } = props;

    useEffect(() => {
        document.title = title ? `${title}` : "Không tìm thấy trang";
    }, [title]);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-slate-800 mt-[60px] ">
            <MovieInfo/>
            <Tab/>
        </main>
    );
}
