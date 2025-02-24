import { Avatar, Button, Container, Grid, TextField, Typography, Box, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Themecontext } from '../App';

const Register = () => {
    const { setIsLogin } = useContext(Themecontext) as { setIsLogin: (isLogin: boolean) => void };
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        avatar: ''
    });

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(event.target.files[0]);
            // Nếu có ảnh được chọn, xóa thông báo lỗi liên quan
            setErrors((prev) => ({ ...prev, avatar: '' }));
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let valid = true;
        const newErrors = { username: '', password: '', confirmPassword: '', avatar: '' };

        if (!username.trim()) {
            newErrors.username = 'Trường này không được bỏ trống';
            valid = false;
        }
        if (!password) {
            newErrors.password = 'Trường này không được bỏ trống';
            valid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
            valid = false;
        }
        if (!confirmPassword) {
            newErrors.confirmPassword = 'Trường này không được bỏ trống';
            valid = false;
        } else if (confirmPassword !== password) {
            newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
            valid = false;
        }
        if (!selectedImage) {
            newErrors.avatar = 'Phải chọn ảnh đại diện';
            valid = false;
        }

        setErrors(newErrors);

        if (valid && selectedImage) {
            try {
                // API 1: Upload hình ảnh
                const formData = new FormData();
                formData.append('avatar', selectedImage);
                const uploadResponse = await axios.post('http://localhost:8080/public/api/uploadImage', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Accept: 'application/json'
                    }
                });
                console.log(uploadResponse.data);

                // API 2: Gửi thông tin đăng ký kèm tên file ảnh đã upload
                const registrationData = {
                    username,
                    password,
                    role: 'user',
                    avatar: uploadResponse.data.link
                };

                const registerResponse = await axios.post('http://localhost:8080/auth/api/register', registrationData, {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    }
                });
                console.log('Registration successful:', registerResponse.data);
                // Thực hiện các hành động sau khi đăng ký thành công, ví dụ: chuyển hướng, hiển thị thông báo,...
                setIsLogin(true);
            } catch (error) {
                console.error('Lỗi trong quá trình upload hoặc đăng ký:', error);
                // Xử lý lỗi: hiển thị thông báo cho người dùng, v.v.
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
                    Đăng ký
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
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
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Xác nhận mật khẩu"
                        type="password"
                        id="confirmPassword"
                        autoComplete="new-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={Boolean(errors.confirmPassword)}
                        helperText={errors.confirmPassword}
                    />
                    <Button variant="contained" component="label" sx={{ mt: 2, mb: 2 }}>
                        Chọn ảnh đại diện
                        <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                    </Button>
                    {selectedImage && (
                        <Box sx={{ mt: 2, mb: 2 }}>
                            <Typography variant="body2">Ảnh đã chọn: {selectedImage.name}</Typography>
                        </Box>
                    )}
                    {errors.avatar && (
                        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                            {errors.avatar}
                        </Typography>
                    )}
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Đăng ký
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2" onClick={() => setIsLogin(true)}>
                                Đã có tài khoản? Đăng nhập
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;
