import React from "react";

const Login = () => {
  return (
    <div className="login-main">
      <div className="email">
        <div>Email address</div>
        <input type="text" value={"Enter email"} />
      </div>
      <div className="Password">
        <div>Password</div>
        <input type="text" value={"Password"} />
      </div>
      <button>Login</button>
    </div>
  );
};

export default Login;
