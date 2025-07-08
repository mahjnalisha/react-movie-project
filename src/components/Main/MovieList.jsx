import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';

const MovieList = () => {
    return (
        <section className='movie_list'>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Popular">
                    <Container>
                        <Row>
                            <MovieCard />
                        </Row>
                    </Container>

                </Tab>
                <Tab eventKey="profile" title="Latest">
                    <Container>
                        <Row>
                            <MovieCard />
                        </Row>
                    </Container>

                </Tab>

            </Tabs>


        </section>
    )
}

export default MovieList