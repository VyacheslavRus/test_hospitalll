import React from "react";
import { useSelector } from "react-redux";
import {
  getDoctorsDataSelector,
  loaderClientsSelector
} from "../redux/doctors/doctorsSelectors";
import { DoctorEmployee } from "../Components/DoctorEmployee";
import style from "./Employees.module.css";

export function Employees() {
  const { doctor } = useSelector(getDoctorsDataSelector);
  const isLoading = useSelector(loaderClientsSelector);

  const tableDoctor = doctor
    .map((doctor) => <DoctorEmployee doctor={doctor} key={doctor.id} />)
    .sort((a, b) => {
      if (a.props.doctor.lastName > b.props.doctor.lastName) {
        return 1;
      }
      if (a.props.doctor.lastName < b.props.doctor.lastName) {
        return -1;
      }
      return 0;
    });

  return (
    <div className={style.tabl}>
      {isLoading && <h2>Loading</h2>}
      <table border="1">
        <caption>Doctors</caption>
        <thead>
          <tr>
            <th>id</th>
            <th>ФИО</th>
            <th>Дата рождения</th>
            <th>Телефон</th>
          </tr>
        </thead>
        <tbody>{tableDoctor}</tbody>
      </table>
    </div>
  );
}
