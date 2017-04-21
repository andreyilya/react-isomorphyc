import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions/fuelSavingsActions";
import FuelSavingsForm from "../components/FuelSavingsForm";

export const FuelSavingsPage = (props) => {
  return (
    <FuelSavingsForm
      fuelSavings={props.fuelSavings}
      {...props.actions}
    />
  );
};

FuelSavingsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings,
    dirty: state.dirty
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FuelSavingsPage);
