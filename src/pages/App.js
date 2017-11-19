import React, {PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';
if ( process.env.BROWSER ) {
  require('../styles/css/bootstrap.css');
  require('../styles/styles.scss');
}

class App extends React.Component {

  render() {
    let pathname = this.props.location.pathname;

    return (
      <div>
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
                <li className={pathname === "/" ? "active" : ""}><IndexLink
                  to="/">Home</IndexLink>
                </li>
                <li className={pathname === "/about" ? "active" : ""}><Link
                  to="/about">About</Link>
                </li>
                <li className={pathname.indexOf("/redux-form") >= 0 ? "active"
                  : ""}>
                  <Link to="/redux-form">Redux
                    form</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <br/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object
};

export default App;
