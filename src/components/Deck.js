import React from "react";
import { Container, CardGroup, Card } from 'react-bootstrap';
import pegaCardAleatorio from "../scripts/deckChooser";

class Deck extends React.Component {
    render() {
        return (
            pegaCardAleatorio.map((f) => (
                <Container bg='info'>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    massa
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            ))
        )
    }
}

export default Deck;