import React from "react";
import {Field, reduxForm} from "redux-form";
import { connect } from 'react-redux'
import {TextInputRedux} from "../components/TextInputRedux";
import Button from "react-bootstrap/lib/Button";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import Col from "react-bootstrap/lib/Col";
import {aol, email, maxLength15, minValue18, number, required, tooOld} from "../validators/validatorsForFormat";
import {load as loadSupplier} from "../reducers/supplierReducer";
import "../styles/styles.scss"; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.


let FieldLevelValidationForm = (props) => {
  const {handleSubmit, pristine, reset, submitting, invalid, load, id} = props;
  return (
    <div>
      <h2>Redux validation for supplier {id}</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Field name="companyName" type="text"
               component={TextInputRedux} label="companyName"
               validate={[required, maxLength15]}
        />
        <Field name="email" type="email"
               component={TextInputRedux} label="Email"
               validate={email}
               warn={aol}
        />
        <Field name="referenceId" type="number"
               component={TextInputRedux} label="Reference  Id"
               validate={[required, number, minValue18]}
               warn={tooOld}
        />
        <Field name="duns" type="number"
               component={TextInputRedux} label="Duns" placeholder="Duns"
               validate={[required]}
               warn={tooOld}
        />
        <Col sm={8} smOffset={4}>
          <ButtonToolbar>
            <Button bsStyle="primary" type="submit" disabled={pristine || invalid || submitting}>Save</Button>
            <Button bsStyle="primary" type="button" onClick={() => load({companyName:"wer"})}>Load</Button>
            <Button bsStyle="default" type="button" disabled={pristine || submitting} onClick={reset}>Reset</Button>
          </ButtonToolbar>
        </Col>

      </form>
    </div>
  )
};

FieldLevelValidationForm = reduxForm({
  form: 'fieldLevelValidation', // a unique identifier for this form
  // touchOnChange: true
})(FieldLevelValidationForm);

FieldLevelValidationForm = connect(
  state => ({
    initialValues: state.supplierReducer.data // pull initial values from account reducer
  }),
  {load : loadSupplier}               // bind account loading action creator
)(FieldLevelValidationForm);
export default FieldLevelValidationForm
