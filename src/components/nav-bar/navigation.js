import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink} from "react-router-dom";
import "./navigation.css"
export default function NAVI_BAR() {

  // const location = useLocation();
  // const {pathname} = location;

  // const splitLocation = pathname.split("/");
  return (
    <Navbar bg="dark" variant="dark" className="navigation">
      <Container>
        <Navbar.Brand className="heading">Weather App</Navbar.Brand>
        <Nav className="nav-links">
          <Nav.Link>
            <NavLink to="/" className="link1">
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/about" className="link2">
              About
            </NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
