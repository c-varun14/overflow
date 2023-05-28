import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [students, setStudents] = useState(null);
  const [admins, setadmins] = useState(null);
  useEffect(() => {
    axios.get("/getStudents").then(({ data }) => {
      setStudents(data);
    });
  }, []);
  return (
    <main className={`${styles.dashboard} flex center`}>
      <Link to="/auth/createStudent" className={styles.btn}>
        Create Student
      </Link>
      <Link to="/auth/createAdmin" className={styles.btn}>
        Create Staff
      </Link>

      <table className={styles.table}>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
        </tr>
        {students !== null &&
          students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
            </tr>
          ))}
        ;
      </table>
    </main>
  );
};

export default Dashboard;
