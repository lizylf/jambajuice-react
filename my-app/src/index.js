import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {PersonCircle, Basket, Search, GeoAlt} from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const TopMenu = () => (
  <Navbar expand="lg" id="topMenu">
    <Container>
      <div id="menuFont"><strong>Due to supply chain challenges, some of your favorite items may be temporarily out of stock. We appreciate your patience as we work to best serve you.</strong></div>
    </Container>
  </Navbar>
);

const TopNavBar = () => (
  <Navbar expand="lg" className="navBar">
    <Container fluid>
    <Nav className="ms-auto">
      <Nav.Link><PersonCircle/></Nav.Link>
      <Nav.Link><strong>log in</strong></Nav.Link>
      <Nav.Link><Basket/></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
);

const BottomNavBar = () => (
  <Navbar className="navBar" id="borderBottom">
    <Container fluid>
      <Navbar.Brand>
        <img
          src="https://www.jamba.com/-/media/jamba/site-logos/logo.svg?v=1&d=20190605T170844Z"
          width="190"
          height="60"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>

      <Nav className="mx-auto">
        <Nav.Link className="px-5"><strong>menu</strong></Nav.Link>
        <Nav.Link className="px-5"><strong>rewards</strong></Nav.Link>
        <Nav.Link className="px-5"><strong>delivery</strong></Nav.Link>
        <Nav.Link className="px-5"><strong>gift cards</strong></Nav.Link>
        <Nav.Link className="px-4"><strong>just gotta jamba</strong></Nav.Link>
        <Nav.Link className="px-4"><Search/><strong>menu search</strong></Nav.Link>
        <Nav.Link className="px-4"><GeoAlt/><strong>locations</strong></Nav.Link>
      </Nav>

    </Container>
  </Navbar>
);

const ButtonNavBar = () => (
  <Container fluid p-0>
  <Navbar className="justify-content-end" id="borderBottom">
      <Button id="button" variant="success"><strong>order pick up</strong></Button>

    <Button id="button" variant="warning"><strong>order delivery</strong></Button>

    </Navbar>
  </Container>
);

const FullWidthImage = () => (
  <img className="img-fluid" src="https://www.jamba.com/-/media/jamba/hero/2023/jj883729c11webwaffle-bowl-parfait2000x610v2.png?v=1&d=20230109T093547Z" alt="logo"
  />
);

const MiddleCard = () => (
  <Container className="d-flex justify-content-center mt-5 p-5">
  <Card className="cardStyle" border="info" style={{ width: '30rem' }}>

    <Card.Body>
      <Card.Text className="text1"><center><i><h3>SCOOP AND SIP</h3></i></center></Card.Text>
      <Card.Title className="text2"><strong><center><h1>New! Belgian Waffle Parfait</h1></center></strong></Card.Title>
      <Card.Text>
        <center> Our new Belgian Waffle Parfait is layered with the toasted Belgian waffle you love, fresh fruit and your choice of nonfat Greek yogurt or sweet coconut whip.</center>

        <p></p>
        <center><Button variant="success"><strong>Order Now</strong></Button></center>

      </Card.Text>
    </Card.Body>
  </Card>

  </Container>
);

const FooterMenu = () => (
  <footer class="fixed-bottom">
<div className="mx-2">
  California and Virginia Residents: You may opt out of the sale or sharing of personal information or targeted advertising by visiting <a href="#">Your Privacy Choices</a>
</div>
<div className="d-flex justify-content-end">
  <Button id="button2" variant="warning">Accept</Button>

</div>
  </footer>
);

const JambaJuice = () => (
  <div className="d-flex flex-column min-vh-100">
    <TopMenu/>
    <TopNavBar/>
    <BottomNavBar/>
    <ButtonNavBar/>
    <FullWidthImage/>
    <MiddleCard/>
    <FooterMenu/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<JambaJuice/>);