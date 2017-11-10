import React, {PropTypes} from "react";
import FieldLevelValidationForm from "../components/FieldLevelValidationForm";
import {connect} from "react-redux";
import {browserHistory, Link} from "react-router";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import {load} from "../actions/supplierActions";

class ReduxFormDemoPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {smShow: false};
  }

  componentWillMount() {
    this.loadSupplier(this.props);
    if (this.props.id) {
      this.openModal();
    }
  }

  componentWillUpdate(nextProps, nextState) {

    if (nextProps.id && this.props.id !== nextProps.id) {
      this.loadSupplier(nextProps);
      this.openModal();
    } else if (!nextProps.id && this.props.id) {
      this.closeModal();
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

  closeModal = () => {
    if (this.props.id) {
      browserHistory.push('/redux-form');
    }
    this.setState({smShow: false});

  };
  openModal = () => this.setState({smShow: true});

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
                onClick={() => this.openModal()}>Create new</Button>
        <Modal bsSize="large" show={this.state.smShow} onHide={this.closeModal}
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
            <Button onClick={this.closeModal}>Close</Button>
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
  id: PropTypes.number,
};


function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.params.id
  };
}

const mapDispatchToProps = dispatch => {
  return {
    load: id => dispatch(load(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxFormDemoPage);
