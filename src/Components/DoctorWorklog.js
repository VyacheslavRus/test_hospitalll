import React from "react";
import style from "./DoctorWorklog.module.css";

export function DoctorWorklog({ doctorrrr }) {
  return doctorrrr.map((el) => {
    return (
      <tr key={el.id} className={el.ok ? "" : style.tableRowRed}>
        <td>{el.from}</td>
        <td>{el.to}</td>
      </tr>
    );
  });
}
