import React, {PropTypes} from "react";
import {Link} from "react-router";

export const SupplierList = ({
  suppliers
}) => {
  let supplierList;
  if (suppliers.content) {
    supplierList = suppliers.content.map(function (item) {
      return (
        <tr key={item.id}>
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
  return (
    <table className={'table table-striped'}>
      <tbody>
      {supplierList}
      </tbody>
    </table>
  );

};

SupplierList.propTypes = {
  suppliers: PropTypes.object,
};
