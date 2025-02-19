// Footer.js
import { Box, Container, Grid, Typography, Link } from '@mui/material';

function Footer() {
    return (
        <Box sx={{ backgroundColor: '#1c1c1c', color: 'white', padding: '40px 0', marginTop: 4 }}>
            <Container>
                <Grid container spacing={4}>
                    {/* Thông tin về trang web */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            MovieFlix
                        </Typography>
                        <Typography variant="body2">
                            Trang web xem phim trực tuyến hàng đầu, cung cấp những bộ phim hot và cập nhật.
                        </Typography>
                    </Grid>

                    {/* Liên kết hữu ích */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Liên kết hữu ích
                        </Typography>
                        <Link href="#" color="inherit" underline="hover">
                            Trang chủ
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover">
                            Phim Mới
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover">
                            Phim Hot
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover">
                            Thể Loại
                        </Link>
                    </Grid>

                    {/* Thông tin liên hệ */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Liên hệ
                        </Typography>
                        <Typography variant="body2">Email: support@movieflix.com</Typography>
                        <Typography variant="body2">ĐT: 0123456789</Typography>
                    </Grid>
                </Grid>

                <Box textAlign="center" pt={4}>
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()} MovieFlix. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
