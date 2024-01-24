import { useRef, useState } from "react";
import "./register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passRef = useRef();

  function handleStart(e) {
    e.preventDefault();
    setEmail(emailRef.current.value);
  }

  function handleFinish(e) {
    e.preventDefault();
    setPassword(passRef.current.value);
  }
  console.log(email);
  console.log(password);

  return (
    <div className="register">
      <div className="topbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <button className="signBtn">Sign In</button>
      </div>
      <div className="registerDetails">
        <h1 className="heading">Unlimited movies, TV shows, and many more</h1>
        <h3 className="subHeading">Watch anywhere. Cancel anytime</h3>
        <p className="">
          Ready to watch? Enter your email to create or restart your membership
        </p>
        {!email ? (
          <form className="form">
            <input
              ref={emailRef}
              type="text"
              placeholder="email"
              //   value={email}
            />
            <button onClick={handleStart} className="submitBtn">
              Get Started
            </button>
          </form>
        ) : (
          <form className="form">
            <input
              ref={passRef}
              type="password"
              placeholder="password"
              //   value={password}
            />
            <button onClick={handleFinish} className="submitBtn">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
