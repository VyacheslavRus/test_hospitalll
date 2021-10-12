import React from "react";

import { Link } from "react-router-dom";

export function DoctorEmployee({ doctor }) {
  function convertDate(inputFormat) {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("-");
  }
  return (
    <tr>
      <td>{doctor.id}</td>
      <td>
        <Link to={{ pathname: `/api/employees/worklog/${doctor.id}` }}>
          {doctor.lastName} {doctor.firstName} {doctor.middleName}
        </Link>
      </td>
      <td>{convertDate(doctor.birthDate)}</td>
      <td>{doctor.phone}</td>
    </tr>
  );
}
