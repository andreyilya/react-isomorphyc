import React from "react";
import PropTypes from "prop-types";
import {logout} from "../oauth2/TokenService";
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";
import {Nav, Navbar, NavItem, Row} from "react-bootstrap";

const Header = ({path}) => (
  <Navbar>
    <Navbar.Header className="container-fluid">
      <Navbar.Toggle />
    </Navbar.Header >
    <Row>
      <Navbar.Collapse>
        <Nav>
          <IndexLinkContainer to="/"><NavItem>Home</NavItem></IndexLinkContainer>
          <LinkContainer to="/push"><NavItem>Push</NavItem></LinkContainer>
          <LinkContainer to="/infinite-scroll"><NavItem>Infinite scroll</NavItem></LinkContainer>
          <LinkContainer to="/redux-form"><NavItem>Redux form</NavItem></LinkContainer>
        </Nav>
        <Nav pullRight>
          <NavItem onClick={logout}>
            <span className={"glyphicon glyphicon-log-out"}/> Log out
          </NavItem >
        </Nav>
      </Navbar.Collapse>
    </Row>
  </Navbar>
);

Header.propTypes = {
  path: PropTypes.string,
};

export default Header;
