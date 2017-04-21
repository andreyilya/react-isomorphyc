import React from "react";
import Col from "react-bootstrap/lib/Col";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";
import Popover from "react-bootstrap/lib/Popover";
import FormGroup from "react-bootstrap/lib/FormGroup";
import _ from "lodash";

export const TextInputRedux = ({input, label, type,placeholder, meta: {dirty, visited, pristine, touched, error, warning}}) => (

    <FormGroup>
      <Col componentClass={ControlLabel} sm={4}>{label}</Col>
      <Col sm={8}>
        <FormControl
          type="text"
          placeholder={placeholder}
          {...input}
         />

      </Col>
    </FormGroup>


);

