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
    role: "",
  });

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(userInput);
      await axios.post("/auth/createAdmin", userInput);
    } catch (err) {
      setFormError(err.response.data);
    }
  };

  return (
    <div className={styles.sign}>
      <h2>Create Staff</h2>
      <form onSubmit={formSubmitHandler}>
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
        <fieldset className={styles.fieldset}>
          <legend>Select a role:</legend>
          <div>
            <input
              type="radio"
              name="role"
              value="principal"
              id="principal"
              onChange={() => {
                setUserInput((prevValue) => {
                  return { ...prevValue, role: "principal" };
                });
              }}
            />
            <label htmlFor="principal">principal</label>
          </div>
          <div>
            <input
              type="radio"
              name="role"
              value="dean"
              id="dean"
              onChange={() => {
                setUserInput((prevValue) => {
                  return { ...prevValue, role: "dean" };
                });
              }}
            />
            <label htmlFor="dean">dean</label>
          </div>
          <div>
            <input
              type="radio"
              name="role"
              value="president"
              id="president"
              onChange={() => {
                setUserInput((prevValue) => {
                  return { ...prevValue, role: "president" };
                });
              }}
            />
            <label htmlFor="president">president</label>
          </div>
          <div>
            <input type="radio" name="role" value="staff" id="staff" />
            <label htmlFor="staff">staff</label>
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
