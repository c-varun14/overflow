import { useContext, useState } from "react";
import styles from "../Sign.module.css";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
// import { UserContext } from "../../../UserContext";

const Signin = () => {
  const [formError, setFormError] = useState();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    department: "",
    name: "",
  });

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/createStudent", userInput);
      // setUser(data);
    } catch (err) {
      setFormError(err.response.data);
    }
  };

  return (
    <div className={styles.sign}>
      <h2>Create Student</h2>
      <form onSubmit={formSubmitHandler}>
        <input
          onChange={(e) => {
            setUserInput((prevUser) => {
              return { ...prevUser, [e.target.name]: e.target.value };
            });
          }}
          className={styles.input}
          required
          name="name"
          type="text"
          placeholder="name*"
        />
        <input
          onChange={(e) => {
            setUserInput((prevUser) => {
              return { ...prevUser, [e.target.name]: e.target.value };
            });
          }}
          className={styles.input}
          required
          name="email"
          type="email"
          placeholder="email*"
        />
        <input
          onChange={(e) => {
            setUserInput((prevUser) => {
              return { ...prevUser, [e.target.name]: e.target.value };
            });
          }}
          className={styles.input}
          required
          name="password"
          type="password"
          placeholder="password*"
        />
        <input
          onChange={(e) => {
            setUserInput((prevUser) => {
              return { ...prevUser, [e.target.name]: e.target.value };
            });
          }}
          className={styles.input}
          required
          id="department"
          name="department"
          type="text"
          placeholder="department*"
        />
        <fieldset className={styles.fieldset}>
          <legend>Select a department:</legend>
          <div>
            <input
              type="radio"
              name="department"
              value="cse"
              id="cse"
              onChange={() => {
                setUserInput((prevValue) => {
                  return { ...prevValue, department: "cse" };
                });
              }}
            />
            <label htmlFor="cse">cse</label>
          </div>
          <div>
            <input
              type="radio"
              name="department"
              value="ai"
              id="ai"
              onChange={() => {
                setUserInput((prevValue) => {
                  return { ...prevValue, department: "ai" };
                });
              }}
            />
            <label htmlFor="ai">ai</label>
          </div>
          <div>
            <input
              type="radio"
              name="department"
              value="robotics"
              id="robotics"
              onChange={() => {
                setUserInput((prevValue) => {
                  return { ...prevValue, department: "robotics" };
                });
              }}
            />
            <label htmlFor="robotics">robotics</label>
          </div>
        </fieldset>

        {formError && <p className={styles.errorMessage}>{formError}</p>}

        <button className={`${styles.btn} ${styles.submitBtn}`} type="submit">
          Submit
        </button>
      </form>
      <p>Don't have an account? You can ask your college staff to signup</p>
    </div>
  );
};

export default Signin;
