import React, {PropTypes} from "react";
import {logout} from "../oauth2/TokenService";
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";
import {Nav, Navbar, NavItem} from "react-bootstrap";

const Header = ({path}) => (
  <Navbar>
    <Navbar.Header className="container-fluid">
      <Navbar.Toggle />
    </Navbar.Header >
    <Navbar.Collapse>
      <Nav>
        <IndexLinkContainer to="/"><NavItem>Home</NavItem></IndexLinkContainer>
        <LinkContainer to="/infinite-scroll"><NavItem>Infinite scroll</NavItem></LinkContainer>
        <LinkContainer to="/redux-form"><NavItem>Redux form</NavItem></LinkContainer>
      </Nav>
      <Nav pullRight>
        <NavItem onClick={logout}>
          <span className={"glyphicon glyphicon-log-out"}/> Log out
        </NavItem >
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  path: PropTypes.string,
};

export default Header;
