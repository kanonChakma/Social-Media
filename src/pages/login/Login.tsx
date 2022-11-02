import { FC } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
const Login: FC<{}> = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="right">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            cum placeat debitis iure numquam! Repellat modi dolorum sapiente,
            numquam possimus soluta quisquam veritatis nihil obcaecati facere
            cupiditate nesciunt ipsa deserunt!
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>register</button>
          </Link>
        </div>
        <div className="left">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
