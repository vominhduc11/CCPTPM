// import { Route, Routes } from 'react-router-dom';
import { Box, Modal } from '@mui/material';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import { createContext, useState } from 'react';
import Login from './modal/Login';
import Register from './modal/Register';
import { Route, Routes } from 'react-router-dom';
import Category from './Category';
import Detail from './Detail';
import Video from './Video';

export const Themecontext = createContext({});

function App() {
    const [open, setOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    // Hàm đóng modal đăng nhập
    const handleClose = () => {
        setOpen(false); // Đóng modal
        setIsLogin(true); // Trả về trạng thài login
    };

    return (
        <Themecontext.Provider value={{ setOpen, setIsLogin }}>
            <Box component="div" className="App" display="flex" flexDirection="column" minHeight="100vh">
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/category/:name" element={<Category />} />
                    <Route path="/detail/:nameFilm" element={<Detail />} />
                    <Route path="/video/:nameFilm" element={<Video />} />
                </Routes>
                <Footer />

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    {isLogin ? <Login /> : <Register />}
                </Modal>
            </Box>
        </Themecontext.Provider>
    );
}

export default App;
