import React from "react";
import Col from "react-bootstrap/lib/Col";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";
import Popover from "react-bootstrap/lib/Popover";
import FormGroup from "react-bootstrap/lib/FormGroup";
import _ from "lodash";

export const TextInputRedux = ({input, label, placeholder, type, meta: {dirty, visited, pristine, touched, error, warning}}) => {
  function validationState(valid) {
    if (!this.changed) {
      return valid ? null : "error";
    } else {
      return valid ? "success" : "error";
    }
  }

  return (

    <FormGroup validationState={validationState(valid)}>
      <Col componentClass={ControlLabel} sm={4}>{label}</Col>
      <Col sm={8}>
        <FormControl
          type="text"
          placeholder={this.placeholder}
          {...input}
         />

        {!valid ? <Popover
          id="popover-basic"
          placement="right"
          positionTop={-5 * (errors.length - 1)}>
          {_.map(errors, (item, i) => {
            return <div key={i} title={item.message}> {item.message} </div>;
          })}

        </Popover> : ''}

      </Col>
    </FormGroup>

  );

};

