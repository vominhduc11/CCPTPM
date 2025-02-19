// import { Route, Routes } from 'react-router-dom';
import { Modal } from '@mui/material';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import { createContext, useState } from 'react';
import Login from './modal/Login';
import Register from './modal/Register';

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
            <div className="App">
                <Header />
                <Navbar />
                <Body />
                <Footer />

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    {isLogin ? <Login /> : <Register />}
                </Modal>
            </div>
        </Themecontext.Provider>
    );
}

export default App;
