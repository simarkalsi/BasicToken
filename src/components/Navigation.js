import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const Navigation = ({ web3Handler, account }) => {
    return (
        <Navbar expand="lg" bg="secondary" variant="dark">
            <Container>
                <Nav.Link as={Link} to="/" style={{ margin:"10px"}} >
                    <h4> BASIC TOKEN</h4>
                </Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav  " />
                <Navbar.Collapse id="responsive-navbar-nav justify-content-center">
                    <Nav className="me-auto text-center justify-content-center">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/create">About</Nav.Link>
                        <Nav.Link as={Link} to="/my-listed-items">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        {account ? (
                            <Nav.Link
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4">
                                <Button variant="outline-light">
                                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                                </Button>

                            </Nav.Link>
                        ) : (
                            <Button onClick={web3Handler} variant="outline-light">Connect Wallet</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation;