import { useContext, useState } from "react";
import styles from "../Sign.module.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../../UserContext";

const Signin = () => {
  const [formError, setFormError] = useState();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const { user, setUser, ready } = useContext(UserContext);
  console.log(user);
  const [redirect, setRedirect] = useState(false);
  if (!ready) return "Loading...";
  else if (ready && user) return <Navigate to={"/"} />;

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/signin", userInput);
      // console.log(data);
      setRedirect(true);
      setUser(data);
    } catch (err) {
      setFormError(err.response.data);
    }
  };

  return (
    <div className={styles.sign}>
      <h2>Signin</h2>
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
