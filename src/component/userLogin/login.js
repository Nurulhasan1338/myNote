import React, { useContext, useState} from "react";
import Button from "@mui/material/Button";
import notecontext from "../context/Notes/Notecontext";
import { useNavigate} from "react-router-dom";
import "./login.css";
import add from "../config.js";


const Login = () => {

  const host = add;

  const context = useContext(notecontext);
  const { showAlert,} = context;
  const history = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${host}api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        }
      );
      const token = await response.json();
      if(token.success===true){
        localStorage.setItem('token',token.authtoken);
        history("/notes",{replace: true});

      }else{
      showAlert(token.error, "danger");
      }
    } catch (err) {
      showAlert(err, "danger");
    }
  };


  const onClick=(e)=>{
    e.preventDefault();
    history("/signup");
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center outer">
      <div className="px-4 py-5 text-light login">
        <h1 className="text-center display-4">Login</h1>
        <form onSubmit={handleClick}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={onChange}
              id="email"
              value={data.email}
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              password
            </label>
            <input
              type="password"
              name="password"
              onChange={onChange}
              className="form-control"
              value={data.password}
              id="password"
              placeholder=""
            />
          </div>

          <div className="d-flex justify-content-between mb-3 ">
            <Button type="submit" variant="contained" color="success">
              login
            </Button>
          </div>
          <div className="mb-3 ">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label me-3"
            >
              new user? register here!
            </label>
            
            <Button variant="outlined" color="info" onClick={onClick}>
              Signup
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
