import React, {PropTypes} from "react";
import Routes from "../routes";
import Header from "../components/Header";

const App = () => (
  <div>
    <Header path="curr"/>
    <Routes/>
  </div>
);


App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object
};

export default App;
