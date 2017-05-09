import React from "react";
import FieldLevelValidationForm from "../components/FieldLevelValidationForm";
import SupplierService from "../api/SupplierService";
import {connect} from "react-redux";
import { Link } from 'react-router';

class ReduxFormDemoPage extends React.Component {
  submit = (values) => {
    // Do something with the form values
    console.log(values);
    SupplierService.getSupplier().then(res => {
      console.log(res);
    });
    return SupplierService.getSuppliers().then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div><FieldLevelValidationForm onSubmit={this.submit} id={this.props.id}/>

        <p>Other suppliers</p>
        <Link to="/redux-form/1">Supplier 1</Link>{' | '}
        <Link to="/redux-form/2">Supplier 2</Link>{' | '}
        <Link to="/redux-form/3">Supplier 3</Link>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.params.id,
    filter: ownProps.location.query.filter
  };
}

export default connect(
  mapStateToProps
)(ReduxFormDemoPage);
