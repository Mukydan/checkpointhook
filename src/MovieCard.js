import React from 'react';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

const MovieCard = ({ title, description, posterUrl, rating }) => {
  return (
      <Card style={{backgroundColor: "black", borderStyle: "solid", margin: "10px", color: "white" }}>
        <Card.Img variant="top" src={posterUrl} style={{ width: "18rem", height: "22rem", margin: "10px" }} alt= {title} />
        <Card.Body>
          <Card.Title>Titre : {title}</Card.Title>
          <Card.Text>
            Description : <br /> {description}
          </Card.Text>
          <ListGroup variant="flush" >
                        <ListGroup.Item className="movie-card">Note : {rating}/10</ListGroup.Item>
          </ListGroup>
                        
        </Card.Body>
        
      </Card>
  );
};

export default MovieCard;
