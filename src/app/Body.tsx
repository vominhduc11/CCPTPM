import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardMedia, Box, Container, Typography, Grid, ImageList, ImageListItem, Button } from '@mui/material';
import { settings, settings2 } from './setting/Carosel';
import { images, images2 } from './data/Image';
import { Link } from 'react-router-dom';

function Body() {
    return (
        <Container maxWidth="xl">
            <Box sx={{ marginTop: 3 }}>
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <Card key={index}>
                            <CardMedia component="img" height="400" image={img} alt={`Slide ${index}`} />
                        </Card>
                    ))}
                </Slider>
            </Box>

            <Box sx={{ marginTop: 12 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    NHIỀU NGƯỜI XEM NHẤT
                </Typography>
                <Slider {...settings2}>
                    {images2.map((img, index) => (
                        <Grid key={index} item sx={{ padding: 1 }}>
                            <Link to={`/detail/abc`} style={{ textDecoration: 'none' }}>
                                <Box
                                    component="img"
                                    src={img}
                                    alt={`Slide ${index}`}
                                    sx={{ width: '100%', height: 'auto' }}
                                />
                                <Typography variant="h4" align="center" color="textPrimary">
                                    abc
                                </Typography>
                            </Link>
                        </Grid>
                    ))}
                </Slider>
            </Box>

            <Box sx={{ marginTop: 12 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    GỢI Ý HÔM NAY
                </Typography>
                <ImageList
                    sx={{ width: '100%', height: 'auto' }}
                    cols={6} // Số cột hiển thị
                    gap={12} // Khoảng cách giữa các hình ảnh
                >
                    {images.map((image, index) => (
                        <ImageListItem component={Link} to={`/detail/abc`} key={index}>
                            <img
                                src={image}
                                alt={`Gợi ý ${index + 1}`}
                                loading="lazy"
                                style={{ height: 280, objectFit: 'cover' }}
                            />
                            <Typography variant="h4" align="center">
                                abc
                            </Typography>
                        </ImageListItem>
                    ))}
                </ImageList>
                <Box display="flex" justifyContent="center" mt={2}>
                    <Button variant="contained" color="primary">
                        Xem thêm
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Body;
