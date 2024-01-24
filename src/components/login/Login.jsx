import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="topbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
      </div>
      <div className="loginContainer">
        <form className="loginForm">
          <h1>Sign In</h1>
          <input type="text" placeholder="Email or Phone no." />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            The page is protected by reCAPTCHA to ensure you're not a bot.{" "}
            <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login;
