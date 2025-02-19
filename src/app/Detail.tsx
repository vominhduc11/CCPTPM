import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Detail() {
    // const { nameFilm } = useParams();

    return (
        <Container sx={{ paddingTop: 4 }} maxWidth="lg">
            <Box
                sx={{
                    display: 'flex',
                    gap: 3
                }}
            >
                <Box
                    component="img"
                    src="https://metiz.vn/media/uploads/2024/08/03/phim-hay-thang-8-2.jpg"
                    alt=""
                    height={600}
                    width={400}
                ></Box>
                <Box component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box component="div">
                        <Typography variant="h4" gutterBottom>
                            Phong Thần 2: Chiến Hỏa Tây Kỳ
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Thể Loại: Hành Động, Huyền Huyễn
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Ngôn Ngữ: Tiếng Anh
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Thời lượng: 120 phút
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Năm sản xuất: 2024
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Đạo diễn: Phong Thần
                        </Typography>
                        <Typography
                            sx={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                WebkitLineClamp: 4, // Hiển thị tối đa 4 dòng
                                lineHeight: '1.5em', // Chiều cao dòng
                                maxHeight: '6em' // 4 dòng * 1.5em = 6em
                            }}
                            variant="h6"
                        >
                            Mô tả: Đây là một phim hài hước về một người đàn ông điên rồ được đưa ra một câu chuyện hài
                            hước về một người đàn ông điên rồ được đưa ra một câu chuyện Mô tả: Đây là một phim hài hước
                            về một người đàn ông điên rồ được đưa ra một câu chuyện hài hước về một người đàn ông điên
                            rồ được đưa ra một câu chuyện Mô tả: Đây là một phim hài hước về một người đàn ông điên rồ
                            được đưa ra một câu chuyện hài hước về một người đàn ông điên rồ được đưa ra một câu chuyện
                        </Typography>
                    </Box>
                    <Box component="div" sx={{ marginTop: 'auto' }}>
                        <Button variant="outlined">
                            <Link to="/video/ten phim">Xem</Link>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Detail;
