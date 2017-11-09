import React from "react";
import FieldLevelValidationForm from "../components/FieldLevelValidationForm";
import {connect} from "react-redux";
import {Link} from "react-router";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import {load} from "../actions/supplierActions";


class ReduxFormDemoPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {smShow: false};
  }

  submit = (values) => {
    alert(values)
  };

  componentWillMount() {
    this.loadSupplier(this.props);
  }

  componentWillUpdate(nextProps, nextState) {
    this.loadSupplier(nextProps);
  }

  loadSupplier = (props) => {
    if (props.id) {
      props.load(props.id);
    }
  };

  closeModal = () => this.setState({smShow: false});
  openModal = () => this.setState({smShow: true});

  render() {

    return (
      <div><FieldLevelValidationForm/>
        <Button bsStyle="default" type="button"
                onClick={() => this.openModal()}>Open
          modal</Button>
        <Modal bsSize="large" show={this.state.smShow} onHide={this.closeModal}
               aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Modal
              heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
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
    filter: ownProps.location.query.filter,
    onSubmit: this.submit
  };
}

export default connect(
  mapStateToProps,
  dispatch => ({
    load: id => dispatch(load(id))
  })
)(ReduxFormDemoPage);
