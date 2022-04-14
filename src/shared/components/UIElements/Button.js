import React from "react";
import { Container, Button } from "react-bootstrap";

const ButtonComponent = () => {
  return (
    <Container>
      <Button
        variant="dark"
        style={{
          right: "0",
          bottom: "0",
          position: "absolute",
          marginRight: "40px",
          marginBlockEnd: "40px",
        }}
      >
        Redeem Now
      </Button>
    </Container>
  );
};

export default ButtonComponent;
