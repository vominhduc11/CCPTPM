import { Container, ImageList, ImageListItem, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Category {
    id: string;
    name: string;
}

function Category() {
    const { id } = useParams();
    interface Film {
        id: string;
        name: string;
        link: string;
    }

    const [films, setFilms] = useState<Film[]>([]);
    const [category, setCategory] = useState<Category | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const [res1, res2] = await Promise.all([
                    axios.get(`http://localhost:8080/public/api/getAllFilmOfCategory/${id}`),
                    axios.get(`http://localhost:8080/public/api/getCategoryById/${id}`)
                ]);
                setFilms(res1.data);
                setCategory(res2.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error: {error}</Typography>;

    return (
        <Container maxWidth="xl">
            <Typography variant="h3" align="center" gutterBottom>
                {category?.name || 'Category'}
            </Typography>
            <ImageList sx={{ width: '100%', height: 'auto' }} cols={6} gap={12}>
                {films.map((film: Film) => (
                    <ImageListItem component={Link} to={`/detail/${film.id}`} key={film.id}>
                        <img
                            src={film.link}
                            alt={film.name}
                            loading="lazy"
                            style={{ height: 280, objectFit: 'cover' }}
                        />
                        <Typography variant="h4" align="center">
                            {film.name}
                        </Typography>
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
}

export default Category;
