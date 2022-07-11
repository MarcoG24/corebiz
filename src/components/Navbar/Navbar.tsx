import Container from 'react-bootstrap/Container';
import logo from '../../assets/logo-corebiz-black.png'
import Form from 'react-bootstrap/Form';
import './Navbar.scss'
import { BsSearch, BsCart4 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import {Button, Row, Col} from 'react-bootstrap';

function Navbar() {
  return (
    <>
    <Container fluid className='nav-bar'>
        <Row className='align-items-end'>
            <Col sm={3} className="d-inline-flex">
                <img src={logo} alt="corebiz"/>
            </Col>
            <Col sm={6} className="d-inline-flex flex-column-reverse">
                <Form className="d-flex form-navbar">
                    <Form.Control
                        type="search"
                        placeholder="¿Qué estas buscando?"
                        className="me-2 search"
                        aria-label="Search"
                    />
                    <Button className='nav-bar-button'>
                        <BsSearch />
                    </Button>
                </Form>
            </Col>
            <Col sm={2}>
                <Button className='nav-bar-button'>
                    <AiOutlineUser />
                    <span className='align-items-end span-navbar'>Mi Cuenta</span>
                </Button>
            </Col>
            <Col sm={1}>
                <Button className='nav-bar-button'>
                    <BsCart4 />
                </Button>
            </Col>
        </Row>
    </Container>
    </>
  );
}

export default Navbar;