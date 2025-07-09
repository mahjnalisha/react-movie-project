import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const MovieCard = (popular_movie) => {
    const pm = popular_movie.popular_movie
    return (
        <>
            <Card className="single-card-movie bg-dark text-white" variant="flush">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${pm.poster_path}`} className="movie-image" />
                <Card.ImgOverlay>
                    <Card.Body className="movie-body">
                        <Card.Title> {pm.original_title}</Card.Title>
                        <Card.Text>
                            {pm.overview.slice(0, 100) + " ..."}
                        </Card.Text>
                        <Button variant="dark">View More</Button>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </>
    );
}

export default MovieCard;