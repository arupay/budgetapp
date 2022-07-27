import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand>
        <Nav.Link href="/transactions">Budget Genie</Nav.Link>
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="/transactions/new">New Transaction</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
