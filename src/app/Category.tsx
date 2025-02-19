import { Container, ImageList, ImageListItem, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { images } from './data/Image';

function Category() {
    const { name } = useParams();

    return (
        <Container maxWidth="xl">
            <Typography variant="h3" align="center" gutterBottom>
                {name}
            </Typography>
            <ImageList
                sx={{ width: '100%', height: 'auto' }}
                cols={6} // Số cột hiển thị
                gap={12} // Khoảng cách giữa các hình ảnh
            >
                {images.map((image, index) => (
                    <ImageListItem component={Link} to="/detail/abc" key={index}>
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
        </Container>
    );
}

export default Category;
