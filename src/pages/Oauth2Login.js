import React from "react";
import queryString from "query-string";
import {requestToken} from "../oauth2/TokenService";

class Oauth2Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let getParameters = queryString.parse(this.props.location.search);
    requestToken(getParameters.code, this.props.history);
  }

  render() {
    return (
      <div/>
    )
  }
}
export default Oauth2Login;
