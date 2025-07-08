import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const MovieList = () => {
    return (
        <section className='movie_list'>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Popular">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="profile" title="Latest">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./assets/react.svg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>


        </section>
    )
}

export default MovieList