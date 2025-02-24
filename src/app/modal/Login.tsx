import { Container, Box, TextField, Button, Typography, Avatar, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Themecontext } from '../App';

function Login() {
    const { setIsLogin, setOpen, setAuth, setAvatar } = useContext(Themecontext) as {
        setIsLogin: (isLogin: boolean) => void;
        setOpen: (open: boolean) => void;
        setAuth: (auth: boolean) => void;
        setAvatar: (avatar: string) => void;
    };
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let valid = true;
        const newErrors = { username: '', password: '' };

        if (!username.trim()) {
            newErrors.username = 'Username không được để trống';
            valid = false;
        }
        if (!password) {
            newErrors.password = 'Password không được để trống';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            try {
                const response = await axios.post(
                    'http://localhost:8080/auth/api/login',
                    { username, password },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json'
                        }
                    }
                );
                console.log('Đăng nhập thành công:', response.data);

                // Lưu token và refresh token từ server gửi về vào localStorage
                const { token, refreshToken } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('refreshToken', refreshToken);
                setAuth(true); // Đã đăng nhập thành công
                setOpen(false); // Đóng modal đăng nhập
                setAvatar(response.data.avatar); // Lưu avatar của người dùng
                // Thực hiện các hành động sau khi đăng nhập thành công, ví dụ: chuyển hướng hoặc lưu thông tin người dùng
            } catch (error) {
                console.error('Lỗi đăng nhập:', error);
                // Xử lý lỗi đăng nhập, ví dụ: hiển thị thông báo lỗi cho người dùng
            }
        }
    };

    return (
        <Container sx={{ backgroundColor: 'white' }} component="main" maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Đăng nhập
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        error={Boolean(errors.username)}
                        helperText={errors.username}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mật khẩu"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Đăng nhập
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Quên mật khẩu?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2" onClick={() => setIsLogin(false)}>
                                Chưa có tài khoản? Đăng kí
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;
