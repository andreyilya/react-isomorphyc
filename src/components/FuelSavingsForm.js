import React, {PropTypes} from "react";
import FuelSavingsResults from "./FuelSavingsResults";
import TextInput from "./TextInput";
import Button from "react-bootstrap/lib/Button";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";

class FuelSavingsForm extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.onTimeframeChange = this.onTimeframeChange.bind(this);
    this.fuelSavingsKeypress = this.fuelSavingsKeypress.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  onTimeframeChange(e) {
    this.props.calculateFuelSavings(this.props.fuelSavings, 'milesDrivenTimeframe', e.target.value);
  }


  fuelSavingsKeypress(name, value, valid) {
    this.props.calculateFuelSavings(this.props.fuelSavings, name, value);
  }

  save(e) {
    this.props.saveFuelSavings(this.props.fuelSavings);
    e.preventDefault();
  }

  resetForm(e) {
    this.props.resetForm();
    e.preventDefault();
  }

  render() {
    const {fuelSavings} = this.props;
    let dirty = false;//TODO: change
    return (
      <div>
        <h2>Fuel Savings Analysis</h2>
        <form className="form-horizontal" onSubmit={this.save}>
          <TextInput
            label="New Vehicle MPG"
            onChange={this.fuelSavingsKeypress}
            name="newMpg"
            value={fuelSavings.newMpg}
            required
            minlength="3" maxlength="7"/>
          <TextInput label="Trade-in MPG" onChange={this.fuelSavingsKeypress} name="tradeMpg"
                     value={fuelSavings.tradeMpg} required maxlength="7" />
          <TextInput label="New Vehicle price per gallon" onChange={this.fuelSavingsKeypress} name="newPpg"
                     value={fuelSavings.newPpg}/>
          <TextInput label="Trade-in price per gallon" onChange={this.fuelSavingsKeypress} name="tradePpg"
                     value={fuelSavings.tradePpg} minlength="2"/>

          <TextInput label="Miles Driven"
                     onChange={this.fuelSavingsKeypress}
                     name="milesDriven"
                     value={fuelSavings.milesDriven}/>
          miles per
          <select
            name="milesDrivenTimeframe"
            onChange={this.onTimeframeChange}
            value={fuelSavings.milesDrivenTimeframe}>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
          <label>Date Modified</label>
          {fuelSavings.dateModified}
          <ButtonToolbar>
            <Button bsStyle="default" type="reset" disabled={dirty} onClick={this.resetForm}>Reset</Button>
            <Button bsStyle="primary" type="submit" onClick={this.save}>Save</Button>
          </ButtonToolbar>
        </form>
        <hr/>

        {fuelSavings.necessaryDataIsProvidedToCalculateSavings && <FuelSavingsResults savings={fuelSavings.savings}/>}

      </div>
    );
  }
}

FuelSavingsForm.propTypes = {
  saveFuelSavings: PropTypes.func.isRequired,
  resetForm: PropTypes.func,
  calculateFuelSavings: PropTypes.func.isRequired,
  fuelSavings: PropTypes.object.isRequired,
};

export default FuelSavingsForm;
