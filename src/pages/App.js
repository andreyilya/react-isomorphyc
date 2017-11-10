import React, {PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';
import '../styles/css/bootstrap.css';
import '../styles/styles.scss';

class App extends React.Component {
  render() {
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
                <li><IndexLink to="/">Home</IndexLink>
                </li>
                <li><Link to="/about" activeClassName={"active"}>About</Link>
                </li>
                <li><Link to="/redux-form" activeClassName={"active"}>Redux
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
  children: PropTypes.element
};

export default App;
