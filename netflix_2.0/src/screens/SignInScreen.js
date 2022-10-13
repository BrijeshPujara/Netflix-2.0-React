import React from "react";
import "./SignInScreen.css";

function SignInScreen() {
  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit" onClick={signIn}>
          {" "}
          Sign In
        </button>
        <h4>
          <span className="signInScreen__gray"> New to Netflix?</span>
          <span className="signInScreen__link" onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
