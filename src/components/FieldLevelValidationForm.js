import React from "react";
import {Field, reduxForm} from "redux-form";
import {TextInputRedux} from "../components/TextInputRedux";
import Button from "react-bootstrap/lib/Button";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import "../styles/styles.scss"; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
  value && value.length > max ? 'Must be ${max} characters or less' : undefined;
const maxLength15 = maxLength(15);
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = min => value =>
  value && value < min ? 'Must be at least ${min}' : undefined;
const minValue18 = minValue(18);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined;
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined;
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
    'Really? You still use AOL for your email?' : undefined;

const renderField = ({input, label, type, meta: {dirty, visited, pristine, touched, error, warning}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error} 2</span>) || (warning && <span>{warning} 1</span>))}
    </div>
  </div>
);

const FieldLevelValidationForm = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props;
  return (
    <div>
      <h2>Redux validation</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Field name="username" type="text"
               component={renderField} label="Username"
               validate={[required, maxLength15]}
        />
        <Field name="email" type="email"
               component={renderField} label="Email"
               validate={email}
               warn={aol}
        />
        <Field name="age" type="number"
               component={renderField} label="Age"
               validate={[required, number, minValue18]}
               warn={tooOld}
        />
        <Field name="other" type="number"
               component={TextInputRedux} label="Other" placeholder="Other"
               validate={[required, number, minValue18]}
               warn={tooOld}
        />
        <ButtonToolbar>
          <Button bsStyle="primary" type="submit" disabled={submitting}>Save</Button>
          <Button bsStyle="default" type="button" disabled={pristine || submitting} onClick={reset}>Reset</Button>
        </ButtonToolbar>

      </form>
    </div>
  )
};

export default reduxForm({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm)