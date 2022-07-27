import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import Balance from "./Balance";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand
          mb-0="true"
          h1="true"
          className="d-inline-block"
          href="/transactions"
        >
          <img
            src="https://gcdnb.pbrd.co/images/55GzmoJpUj0r.png?o=1"
            width="50"
            height="50"
            alt=""
          />
          Budget Genie
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav active="true">
            <Nav.Link href="/transactions/new">New Transaction</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#">
              <Balance />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
