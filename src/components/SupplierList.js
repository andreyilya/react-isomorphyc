import React, {PropTypes} from "react";
import {Link} from "react-router";

export const SupplierList = ({
  suppliers
}) => {
  let supplierList;
  if (suppliers.content) {
    supplierList = suppliers.content.map(function (item) {
      return (
        <tr key={item.key}>
          <td>
            <Link to={'/redux-form/' + item.id}>{item.companyName}</Link>
          </td>
          <td>
            {item.email}
          </td>
        </tr>
      );
    });
  }
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
  suppliers: PropTypes.object,
};
