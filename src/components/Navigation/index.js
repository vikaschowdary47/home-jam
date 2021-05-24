import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Search from "../../assests/Search";
import logo from "../../assests/logo.png";
import "./Navigation.css";
import Gutter from "../Gutter";

const Navigation = () => {
  return (
    <div className="nav_container">
      <Gutter>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#Search">
                <Search />
                Search
              </Nav.Link>
              <Nav.Link href="#Search">Search</Nav.Link>
              <Nav.Link href="#Account">Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Gutter>
    </div>
  );
};

export default Navigation;
