import { useState } from "react";
import { useUserStore } from "../stores/useUserStore";
import * as userService from "../utilities/user-services";
import styles from "./LoginForm.module.scss";

//@ts-ignore
export default function LoginForm({ setUser }) {
  const { settingUser } = useUserStore();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  //@ts-ignore
  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  };
  //@ts-ignore
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await userService.login(credentials);
      settingUser(user);
    } catch (error) {
      //@ts-ignore
      setError(error.message);
    }
  };

  return (
    <div className={styles.LoginForm}>
      <div className={styles.container}>
        <form
          className={styles.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button className={styles.button} type="submit">
            LOG IN
          </button>
        </form>
      </div>
      <h1 className="error-message">&nbsp;{error}</h1>
    </div>
  );
}
