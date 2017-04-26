import React from "react";
import {Field, reduxForm} from "redux-form";
import {TextInputRedux} from "../components/TextInputRedux";
import Button from "react-bootstrap/lib/Button";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import Col from "react-bootstrap/lib/Col";
import {aol, email, maxLength15, minValue18, number, required, tooOld} from "../validators/validatorsForFormat";

import "../styles/styles.scss"; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.


const FieldLevelValidationForm = (props) => {
  const {handleSubmit, pristine, reset, submitting, invalid} = props;
  return (
    <div>
      <h2>Redux validation</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Field name="username" type="text"
               component={TextInputRedux} label="Username"
               validate={[required, maxLength15]}
        />
        <Field name="email" type="email"
               component={TextInputRedux} label="Email"
               validate={email}
               warn={aol}
        />
        <Field name="age" type="number"
               component={TextInputRedux} label="Age"
               validate={[required, number, minValue18]}
               warn={tooOld}
        />
        <Field name="other" type="number"
               component={TextInputRedux} label="Other" placeholder="Other"
               validate={[required]}
               warn={tooOld}
        />
        <Col sm={8} smOffset={4}>
          <ButtonToolbar>
            <Button bsStyle="primary" type="submit" disabled={pristine || invalid || submitting}>Save</Button>
            <Button bsStyle="default" type="button" disabled={pristine || submitting} onClick={reset}>Reset</Button>
          </ButtonToolbar>
        </Col>

      </form>
    </div>
  )
};

export default reduxForm({
  form: 'fieldLevelValidation'// a unique identifier for this form
  // touchOnChange: true
})(FieldLevelValidationForm)
