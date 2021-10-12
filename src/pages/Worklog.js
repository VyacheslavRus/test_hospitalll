import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DoctorWorklog } from "../Components/DoctorWorklog";
import { getDoctorsDataSelector } from "../redux/doctors/doctorsSelectors";
import { getDoctorsWorklogOperation } from "../redux/doctorsWorklog/doctorsWorklogOperations";
import { getDoctorsWorklogDataSelector } from "../redux/doctorsWorklog/doctorsWorklogSelectors";
import styles from "./Worklog.module.css";

export function Worklog(props) {
  const dispatch = useDispatch();
  const { doctorWorklog } = useSelector(getDoctorsWorklogDataSelector);
  const { doctor } = useSelector(getDoctorsDataSelector);

  useEffect(() => {
    dispatch(getDoctorsWorklogOperation());
  }, [dispatch]);

  const doctorId = props.match.params.id;

  const doctorFilterTime = doctorWorklog.filter((el) => {
    return el.employee_id === Number(doctorId);
  });

  const doctorFilterName = doctor.filter((el) => {
    return el.id === Number(doctorId);
  });

  const [doc] = doctorFilterName;

  const doctorNotOne = doctorWorklog.filter(
    (el) => el.employee_id !== Number(doctorId)
  );

  function docPresenceStatus(time, worklogArray) {
    const date = Date.parse(time);
    const doctorFilterСomparison = worklogArray.filter((el) => {
      if (Date.parse(el.from) < date && Date.parse(el.to) > date) {
        return true;
      }
      return false;
    });

    if (doctorFilterСomparison.length >= 3) {
      return true;
    }
    return false;
  }

  const doctorsNewComparison = doctorFilterTime.reduce((acc, el) => {
    acc.push({ ...el, ok: docPresenceStatus(el.to, doctorNotOne) });
    return acc;
  }, []);

  return (
    <div className={styles.tabl}>
      <Link to="/api/employees/">
        <button className={styles.btn}>Назад</button>
      </Link>
      <div>
        <table border="1">
          <caption>
            {doc?.lastName} {doc?.firstName} {doc?.middleName}
          </caption>
          <thead>
            <tr>
              <th>from</th>
              <th>to</th>
            </tr>
          </thead>
          <tbody>{<DoctorWorklog doctorrrr={doctorsNewComparison} />}</tbody>
        </table>
      </div>
    </div>
  );
}
