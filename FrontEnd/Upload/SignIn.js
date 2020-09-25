import React from "react";
import { useState, useEffect } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  onsubmit = (e) => {
    e.preventDefault();
    // console.log({ email, password });
  };

  return (
    <div id="fullbg">
      <div className="container">
        <form className="form-signin" onSubmit={onsubmit}>
          <h1 className="form-signin-heading"> Please login</h1>
          <input
            type="text"
            className="form-control"
            id=""
            name="username"
            placeholder="Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
