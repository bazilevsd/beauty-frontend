import { Component } from "react";
import { signUp } from "../utilities/user-services";
import styles from "./SignUpForm.module.scss";

export default class SignUpForm extends Component {
  constructor() {
    //@ts-ignore
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm: "",
      error: "",
    };
  }
  //@ts-ignore
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };
  //@ts-ignore
  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      //@ts-ignore
      delete formData.error;
      //@ts-ignore
      delete formData.confirm;
      //@ts-ignore
      const user = await signUp(formData);
      console.log("My user", user);

      //@ts-ignore
      settingUser(user);
    } catch (error) {
      console.log(error);
      this.setState({ error: "Sign Up Failed" });
    }
  };
  render() {
    //@ts-ignore
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className={styles.SignUpForm}>
        <div className={styles.container}>
          <form
            className={styles.form}
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <label>Name</label>
            <input
              type="text"
              name="name"
              //@ts-ignore
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              //@ts-ignore
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              //@ts-ignore
              value={this.state.password}
              onChange={this.handleChange}
              required
            />

            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              //@ts-ignore
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button className={styles.button} type="submit" disabled={disable}>
              SIGN UP
            </button>
          </form>
        </div>

        {/* <p className="error-message">&nbsp;{this.state.error}</p> */}
      </div>
    );
  }
}
