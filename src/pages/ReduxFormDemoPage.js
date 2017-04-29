import React from "react";
import FieldLevelValidationForm from "../components/FieldLevelValidationForm";
import SupplierService from "../api/SupplierService";

class ReduxFormDemo extends React.Component {
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
      <FieldLevelValidationForm onSubmit={this.submit} />
    );
  }
}


export default ReduxFormDemo;
