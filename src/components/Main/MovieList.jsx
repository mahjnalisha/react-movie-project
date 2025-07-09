import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';
import useFetch from '../../customhooks/useFetch';


const MovieList = () => {
    // const popular_movies_url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&incluhttps://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=bec449accbdf259a449dde9cca2b95bfde_video=false&language=en-&page=1&=popularity.desc";
    const popular_movies_url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    const data = useFetch(popular_movies_url);

    const popular_movies = data.results;

    if (popular_movies != null) {
        return (
            <section className=' movie-section'>
                <h2>Popular Movies</h2>
                <Container className="movie-container">
                    <Row className="movie-list">
                        {
                            popular_movies.map(popular_movie => <Col key={popular_movie.id} ><MovieCard key={popular_movie.id} popular_movie={popular_movie} /></Col>)
                        }

                    </Row>
                </Container>

            </section>
        )
    }
}

export default MovieList