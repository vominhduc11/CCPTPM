import { Card, CardMedia, Container } from '@mui/material';

function Video() {
    return (
        <Container maxWidth="xl" sx={{ flexGrow: 1, paddingTop: 5 }}>
            <Card sx={{ maxWidth: 600 }}>
                <CardMedia component="video" src="https://www.w3schools.com/html/mov_bbb.mp4" title="Mẫu Video" />
            </Card>
        </Container>
    );
}

export default Video;
