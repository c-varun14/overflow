import { redirect } from "react-router-dom";
import styles from "./Home.module.css";
import people from "../../../assets/PEOPLEEE.png";
import student from "../../../assets/Student.png";
import book from "../../../assets/book.png";
import board from "../../../assets/board.png";
import lab from "../../../assets/microscope.png";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

const Home = () => {
  const { user, ready } = useContext(UserContext);
  if (!ready) return <h1>Loading...</h1>;
  return (
    <main className={styles.home}>
      <p className={styles.welcome}>
        Welcome <span>{user.name}</span>
      </p>
      <div className={`flex ${styles.main}`}>
        <div className={`${styles.alerts} flex`}>
          <div className={`${styles.details} flex`}>
            <p style={{ fontSize: "1.7rem", fontWeight: "500" }}>Recent</p>
            <p style={{ marginBottom: "1rem", fontWeight: "900" }}>Alerts</p>
            <div className="flex center">
              <span>Check Recent Alerts</span>
              <button
                onClick={() => {
                  redirect("/alerts");
                }}
                className={`${styles.btn} flex center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <img src={people} className={styles.alertsImage}></img>
        </div>
        <div className={`${styles.stats} flex`}>
          <div className={styles.students}>
            <img src={student} />
            <p>No. of students</p>
            <h3>2600</h3>
          </div>
          <div className={styles.courses}>
            <img src={book} />
            <p>No of courses</p>
            <h3>40+</h3>
          </div>
          <div className={styles.labs}>
            <img src={lab} />
            <p>No. of labs</p>
            <h3>60+</h3>
          </div>
          <div className={styles.staff}>
            <img src={board} />
            <p>No. of staff</p>
            <h3>500+</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
