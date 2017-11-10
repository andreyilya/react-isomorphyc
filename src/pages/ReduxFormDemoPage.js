import React, {PropTypes} from "react";
import FieldLevelValidationForm from "../components/FieldLevelValidationForm";
import {connect} from "react-redux";
import {Link} from "react-router";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import {closeSupplierModal, load, openModal} from "../actions/supplierActions";

class ReduxFormDemoPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.loadSupplier(this.props);
    if (this.props.id) {
      this.props.openModal("id");
    }
  }

  componentWillUpdate(nextProps, nextState) {

    if (nextProps.id && this.props.id !== nextProps.id) {
      this.loadSupplier(nextProps);
      this.props.openModal("id");
    } else if (!nextProps.id && this.props.id) {
      this.props.closeModal("id", this.props.id);
    }
  }


  submit = (e, values) => {
    e.preventDefault();
    alert(values);
  };

  loadSupplier = (props) => {
    if (props.id) {
      props.load(props.id);
    }
  };

  render() {
    let suppliers = [{name: "name1", email: "email 1", key: 1},
      {name: "name2", email: "email 2", key: 2}];
    let supplierList = suppliers.map(function (item) {
      return (
        <tr key={item.key}>
          <td>
            <Link to={'/redux-form/' + item.key}>{item.name}</Link>
          </td>
          <td>
            {item.email}
          </td>
        </tr>
      );
    });
    let tableClassName = 'table table-striped';
    return (
      <div>
        <Button bsStyle="default" type="button"
                onClick={() => this.props.openModal("id")}>Create new</Button>
        <Modal bsSize="large" show={this.props.modalOpen}
               onHide={() => this.props.closeModal("id", this.props.id)}
               aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Modal
              heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Create/edit supplier</h4>
            <FieldLevelValidationForm onSubmit={this.submit}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.props.closeModal("id", this.props.id)}>Close</Button>
          </Modal.Footer>
        </Modal>

        <h1>Supplier List</h1>
        <table className={tableClassName}>
          <tbody>
          {supplierList}
          </tbody>
        </table>

      </div>
    );
  }
}

ReduxFormDemoPage.propTypes = {
  id: PropTypes.string,
  modalOpen: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func
};


function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.params.id,
    modalOpen: state.modalReducer.modalOpen
  };
}

const mapDispatchToProps = dispatch => {
  return {
    load: id => dispatch(load(id)),
    openModal: id => dispatch(openModal(id)),
    closeModal: (modalId, id) => dispatch(closeSupplierModal(modalId, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxFormDemoPage);
