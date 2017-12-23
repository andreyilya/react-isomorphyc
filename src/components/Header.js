import React, {PropTypes} from "react";
import {Link} from "react-router-dom";

const Header = ({path}) => (
  <nav className={"navbar navbar-default"}>
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className={"collapsed navbar-toggle"}
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"><span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"/> <span className="icon-bar"/>
          <span className="icon-bar"/></button>
      </div>
      <div className={"collapse navbar-collapse"}
           id="bs-example-navbar-collapse-1">
        <ul className={"nav navbar-nav"}>
          <li className={path === "/" ? "active" : ""}><Link
            to="/">Home</Link>
          </li>
          <li className={path === "/infinite-scroll" ? "active" : ""}><Link
            to="/infinite-scroll">About</Link>
          </li>
          <li className={path.indexOf("/redux-form") >= 0 ? "active"
            : ""}>
            <Link to="/redux-form">Redux
              form</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Header.propTypes = {
  path: PropTypes.string,
};

export default Header;
