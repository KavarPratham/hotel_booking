import React, { useContext, useState } from "react";
import TextInput from "../components/TextInput";
import { MyContext } from "../Context";
import { Redirect, Link } from "react-router-dom";
import "./RegisterPage.css"; // Import custom CSS for additional styling

export default function RegisterPage({ history }) {
  const context = useContext(MyContext);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const { username, email, password, password2 } = data;

  if (context.isUserAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <form
        onSubmit={(event) => context.register(event, data, history)}
        className="register-form p-5 bg-light rounded shadow-lg"
      >
        <h2 className="text-center mb-4 text-primary">Register</h2>

        {/* Error Message*/}
        <ul className="text-uppercase text-danger font-weight-bold" id="register-message"></ul>

        {/* Username Input */}
        <div className="mb-3 text-dark">
          <TextInput
            divClass="form-group"
            htmlForLabel="inputForUsername"
            labelName="Username"
            inputClass="form-control"
            inputType="text"
            inputName="username"
            inputValue={username}
            inputPlaceHolder="Enter Username"
            onChange={(event) => setData({ ...data, username: event.target.value })}
            required={true}
          />
        </div>

        {/* Email Input */}
        <div className="mb-3 text-dark">
          <TextInput
            divClass="form-group"
            htmlForLabel="inputForEmail"
            labelName="Email"
            inputClass="form-control"
            inputType="email"
            inputName="email"
            inputValue={email}
            inputPlaceHolder="Enter Email"
            onChange={(event) => setData({ ...data, email: event.target.value })}
            required={true}
          />
        </div>

        {/* Password Input */}
        <div className="mb-3 text-dark">
          <TextInput
            divClass="form-group"
            htmlForLabel="inputPassword1"
            labelName="Password"
            inputClass="form-control"
            inputType="password"
            inputName="password"
            inputValue={password}
            inputPlaceHolder="Enter Password"
            onChange={(event) => setData({ ...data, password: event.target.value })}
            required={true}
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-4 text-dark">
          <TextInput
            divClass="form-group"
            htmlForLabel="inputPassword2"
            labelName="Confirm Password"
            inputClass="form-control"
            inputType="password"
            inputName="password2"
            inputValue={password2}
            inputPlaceHolder="Confirm Password"
            onChange={(event) => setData({ ...data, password2: event.target.value })}
            required={true}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center ">
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Register
          </button>
          <p className="text-dark ">
            Already have an account?
            <Link to="/login" className="text-decoration-none ps-1">
              Login here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
