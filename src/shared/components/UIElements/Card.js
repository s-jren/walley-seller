import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const CardComponent = () => {
  return (
    <Container className="mt-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://dummyimage.com/700/ffffff/000000"
        />
        <Card.Body>
          <Card.Title>Dinner Party</Card.Title>
          <Card.Text>$399</Card.Text>
          <Button variant="outline-dark" style={{ float: "right" }}>
            Buy
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardComponent;
