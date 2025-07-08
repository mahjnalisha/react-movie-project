import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
const MovieCard = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 1', 'Item 2', 'Item 3', 'Item 4'];

    return (
        <>
            {items.map((item, index) => (

                <Col className="single-column">
                    <Card className="single-card">
                        <Card.Img variant="top" src="/vite.svg" className="movie-image" />
                        <Card.Body className="movie-body">
                            <Card.Title> {item}</Card.Title>
                            <Card.Text>
                                {item}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </>
    );
}

export default MovieCard;