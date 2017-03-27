import React, {PropTypes} from "react";
import Col from "react-bootstrap/lib/Col";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";
import Popover from "react-bootstrap/lib/Popover";
import FormGroup from "react-bootstrap/lib/FormGroup";
import _ from "lodash";

export default class TextInput extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.changed = false;
    this.handleChange = this.handleChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  handleChange(e) {
    this.changed = true;
    this.props.onChange(this.props.name, e.target.value, this.isValid());
  }

  onBlur(e) {
    this.handleChange(e);
  }

  validationErrorMatrix() {
    return {
      required: {
        val: this.props.required && this.changed && this.props.value == "",
        message: "Field \"" + this.props.label + "\" is required"
      },
      minlength: {
        val: this.props.minlength && this.changed && this.props.value.length < this.props.minlength,
        message: "\"" + this.props.label + "\" length less than " + this.props.minlength
      }
      ,
      maxlength: {
        val: this.props.maxlength && this.changed && this.props.value.length > this.props.maxlength,
        message: "\"" + this.props.label + "\" length more than " + this.props.maxlength
      }
    };
  }

  isValid() {
    return this.validationErrors().length == 0;
  }

  validationErrors() {
    return _.filter(this.validationErrorMatrix(), (item) => {
      return item.val;
    })
  }

  validationState(valid) {
    if (!this.changed) {
      return valid ? null : "error";
    } else {
      return valid ? "success" : "error";
    }
  }

  render() {
    let errors = this.validationErrors();
    let valid = this.isValid();
    return (

      <FormGroup validationState={this.validationState(valid)}>
        <Col componentClass={ControlLabel} sm={4}>{this.props.label}</Col>
        <Col sm={8}>
          <FormControl
            type="text"
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.handleChange}
            onBlur={this.onBlur}/>

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
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  minlength: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  maxlength: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};
