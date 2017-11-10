import React, {PropTypes} from "react";
import {Link} from "react-router";

export const SupplierList = ({
  suppliers
}) => {
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
    <table className={tableClassName}>
      <tbody>
      {supplierList}
      </tbody>
    </table>
  );

};

SupplierList.propTypes = {
  suppliers: PropTypes.array,
};
