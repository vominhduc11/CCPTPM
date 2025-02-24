import { Box, Modal } from '@mui/material';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import { createContext, useState, useEffect } from 'react';
import Login from './modal/Login';
import Register from './modal/Register';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Category from './Category';
import Detail from './Detail';
import Video from './Video';
import axios from 'axios';
import Country from './Country';

// eslint-disable-next-line react-refresh/only-export-components
export const Themecontext = createContext({});

function App() {
    const [open, setOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [auth, setAuth] = useState(false);
    const [avatar, setAvatar] = useState('');
    const navigate = useNavigate();

    // Hàm đóng modal đăng nhập
    const handleClose = () => {
        setOpen(false); // Đóng modal
        setIsLogin(true); // Trả về trạng thái login
    };

    // Kiểm tra token khi ứng dụng khởi chạy
    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('token');
            const refreshToken = localStorage.getItem('refreshToken');
            if (!token) {
                setAuth(false);
                return;
            }
            try {
                const response = await axios.get('http://localhost:8080/adminuser/api/validToken', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json'
                    }
                });
                console.log('Token validation:', response.data);
                if (response.data.status === 200) {
                    setAuth(true);
                    setAvatar(response.data.avatar);
                } else {
                    // Nếu status không phải 200 (ví dụ 500) thì thử refresh token
                    try {
                        const refreshResponse = await axios.get('http://localhost:8080/adminuser/api/refresh', {
                            headers: { Authorization: `Bearer ${refreshToken}` }
                        });
                        if (refreshResponse.data.status === 200) {
                            // Lấy token mới và lưu vào localStorage
                            localStorage.setItem('token', refreshResponse.data.token);
                            setAvatar(refreshResponse.data.avatar);
                        } else if (refreshResponse.data.status === 500) {
                            setAuth(false);
                            localStorage.removeItem('token');
                            localStorage.removeItem('refreshToken');
                        }
                    } catch {
                        setAuth(false);
                        localStorage.removeItem('token');
                        localStorage.removeItem('refreshToken');
                    }
                }
            } catch (error) {
                setAuth(false);
                console.error('Token validation error:', error);
            }
        };

        verifyToken();
    }, [navigate]);

    return (
        <Themecontext.Provider value={{ setOpen, setIsLogin, auth, setAuth, avatar, setAvatar }}>
            <Box component="div" className="App" display="flex" flexDirection="column" minHeight="100vh">
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/country/:id" element={<Country />} />
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
