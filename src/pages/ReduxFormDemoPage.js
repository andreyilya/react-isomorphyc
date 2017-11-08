import React from "react";
import FieldLevelValidationForm from "../components/FieldLevelValidationForm";
import SupplierService from "../api/SupplierService";
import {connect} from "react-redux";
import {Link} from "react-router";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";


class ReduxFormDemoPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {smShow: false};
  }

  submit = (values) => {
    return SupplierService.getSuppliers().then(res => {
      console.log(res);
    });
  };

  render() {

    let smClose = () => this.setState({smShow: false});
    return (
      <div><FieldLevelValidationForm onSubmit={this.submit} id={this.props.id}/>
        <Button bsStyle="default" type="button" onClick={() => this.setState({smShow: true})}>Open modal</Button>
        <Modal bsSize="large" show={this.state.smShow} aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={smClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        <p>Other suppliers</p>
        <Link to="/redux-form/1">Supplier 1</Link>{' | '}
        <Link to="/redux-form/2">Supplier 2</Link>{' | '}
        <Link to="/redux-form/3">Supplier 3</Link>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.params.id,
    filter: ownProps.location.query.filter
  };
}

export default connect(
  mapStateToProps
)(ReduxFormDemoPage);
