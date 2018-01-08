import React from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import {requestToken} from "../oauth2/TokenService";

class Oauth2Login extends React.PureComponent {
  static render() {
    return (
      <div/>
    );
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let getParameters = queryString.parse(this.props.location.search);
    requestToken(getParameters.code, this.props.history);
  }

}

Oauth2Login.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
};

export default Oauth2Login;
