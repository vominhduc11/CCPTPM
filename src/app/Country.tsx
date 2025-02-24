import { Container, ImageList, ImageListItem, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Film {
    id: string;
    name: string;
    link: string;
}

interface Country {
    id: string;
    name: string;
    // Có thể thêm các thông tin khác nếu cần
}

function Country() {
    const { id } = useParams();
    const [films, setFilms] = useState<Film[]>([]);
    const [country, setCountry] = useState<Country | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const [filmsRes, countryRes] = await Promise.all([
                    axios.get(`http://localhost:8080/public/api/getAllFilmOfCountry/${id}`),
                    axios.get(`http://localhost:8080/public/api/getCountryById/${id}`)
                ]);
                setFilms(filmsRes.data);
                setCountry(countryRes.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography>Error: {error}</Typography>;
    }

    return (
        <Container maxWidth="xl">
            <Typography variant="h3" align="center" gutterBottom>
                {country?.name || 'Country'}
            </Typography>
            <ImageList sx={{ width: '100%', height: 'auto' }} cols={6} gap={12}>
                {films.map((film) => (
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

export default Country;
