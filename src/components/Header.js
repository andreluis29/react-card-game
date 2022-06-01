import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Card Game dos Séculos</Navbar.Brand>
                    <Nav className="ml-75">
                        <Nav.Link href="#home">Jogar</Nav.Link>
                        <Nav.Link href="#features">Ver Pontos</Nav.Link>
                        <Nav.Link href="#pricing">Contato</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    }
}

export default Header;