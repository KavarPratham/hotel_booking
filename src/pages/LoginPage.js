import React, { useContext, useState } from "react";
import { MyContext } from "../Context";
import { Link, Redirect } from "react-router-dom";
import "./LoginPage.css"; 

export default function LoginPage({ history }) {
  const context = useContext(MyContext);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  if (context.isUserAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <form
        onSubmit={(event) => context.login(event, data, history)}
        className="login-form p-5 bg-light rounded shadow-lg"
      >
        <h2 className="text-center mb-4 text-primary">Login</h2>
        <div className="text-uppercase text-danger font-weight-bold"  id="login-error-header"></div>

        {/* Username Input */}
        <div className="mb-3">
          <label htmlFor="inputUserName" className="form-label text-dark">
            Username
          </label>
          <input
            className="form-control"
            type="text"
            name="username"
            value={data.username}
            placeholder="Enter your username"
            onChange={(event) =>
              setData({ ...data, username: event.target.value })
            }
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="inputPassword" className="form-label text-dark">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={data.password}
            placeholder="Enter your password"
            onChange={(event) =>
              setData({ ...data, password: event.target.value })
            }
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center text-dark">
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>
          <p className="text-dark">
            Don't have an account?
            <Link to="/register" className="text-decoration-none ps-1">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
