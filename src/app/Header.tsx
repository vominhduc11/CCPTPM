import { useContext } from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Avatar, Box, Button } from '@mui/material';
import { Themecontext } from './App';
import Tippy from '@tippyjs/react';

function Header() {
    const { setOpen, auth, avatar, setAuth } = useContext(Themecontext) as {
        setOpen: (open: boolean) => void;
        setAuth: (auth: boolean) => void;
        auth: boolean;
        avatar: string;
    };

    // Hàm gọi API khi đăng xuất sử dụng GET
    const handleLogout = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Không tìm thấy token!');
            return;
        }
        try {
            const response = await axios.get('http://localhost:8080/adminuser/api/logout', {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response.data.status === 200) {
                setAuth(false);
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                console.log('Đăng xuất thành công!');
            } else {
                console.error('Đăng xuất thất bại, status:', response.data.status);
            }
        } catch (error) {
            console.error('Lỗi khi đăng xuất:', error);
        }
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#1c1c1c', boxShadow: 'none' }}>
            <Toolbar>
                {/* Logo và tên ứng dụng */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <Typography variant="h6" component="div">
                        MovieFlix
                    </Typography>
                </Box>

                {/* Thanh tìm kiếm */}
                <TextField
                    variant="outlined"
                    placeholder="Tìm kiếm phim..."
                    size="small"
                    sx={{ marginX: 2, backgroundColor: 'white', borderRadius: 1, width: 300 }}
                />

                {/* Nút đăng nhập nếu chưa auth */}
                {!auth && (
                    <Button color="inherit" onClick={() => setOpen(true)}>
                        Đăng nhập
                    </Button>
                )}

                {/* Nếu đã auth, hiển thị avatar kèm Tippy cho đăng xuất */}
                {auth && (
                    <Tippy
                        interactive
                        placement="bottom"
                        render={(attrs) => (
                            <Box
                                onClick={handleLogout}
                                sx={{
                                    padding: 1,
                                    bgcolor: 'background.paper',
                                    color: 'text.secondary',
                                    cursor: 'pointer'
                                }}
                                tabIndex={-1}
                                {...attrs}
                            >
                                <Typography>Đăng xuất</Typography>
                            </Box>
                        )}
                    >
                        <Avatar src={avatar} sx={{ height: 40, width: 40, marginLeft: 3 }} alt="avatar" />
                    </Tippy>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
