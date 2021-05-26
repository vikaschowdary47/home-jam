import { Navbar, Nav } from "react-bootstrap";
import Search from "../../assests/Search";
import Shop from "../../assests/Shop";
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
          <Nav className="ml-auto d-flex flex-row hide_nav_link">
            <Nav.Link href="#Search" className="mr-3">
              <Search color="white" />
            </Nav.Link>
            <Nav.Link href="#shop" className="mr-0">
              <Shop />
            </Nav.Link>
          </Nav>
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
