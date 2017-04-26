import React from "react";
import FieldLevelValidationForm from "../components/FieldLevelValidationForm";

class ReduxFormDemo extends React.Component {
  submit = (values) => {
    // Do something with the form values
    console.log(values);
  };
  render() {
    return (
      <FieldLevelValidationForm onSubmit={this.submit} />
    );
  }
}



export default ReduxFormDemo;
