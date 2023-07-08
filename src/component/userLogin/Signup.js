import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Signup = (props) => {
  const nevigate = useNavigate();

  const showAlert = props.showAlert;

  const [data, setData] = useState({ name: "", email: "", password: "" });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
          }),
        }
      );
      const token = await response.json();
      console.log(token);
      if(token.success===true){
      await showAlert("user added successfully", "success");
      nevigate("/");
      }else{
        showAlert(token.error, "danger");
      }
    } catch (err) {
      showAlert(err, "danger");
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center outer">
      <div className="px-4 py-5 text-light login">
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label w-100 text-center display-6"
        >
          Welcome to
        </label>
        <h1 className="text-center">🅼🆈 🅽🅾🆃🅴🆂</h1>

        <form onSubmit={handleClick}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              minLength={5}
              onChange={onChange}
              value={data.name}
              className="form-control"
              id="name"
              placeholder="enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              minLength={5}
              onChange={onChange}
              value={data.email}
              className="form-control"
              id="email"
              placeholder="enter your name"
              required
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
              minLength={5}
              value={data.password}
              className="form-control"
              id="password"
              placeholder=""
              required
            />
          </div>

          <div className="mb-3 ">
            <Button variant="contained" type="submit" color="success">
              Create account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
