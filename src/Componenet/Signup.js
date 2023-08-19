import React, { useContext } from "react";
import CreateContext from "../Context/CreateContext";
import { useNavigate } from "react-router";
// import "../index.css";

const Signup = () => {
  let { userId, setUserId } = useContext(CreateContext);

  let navigate = useNavigate();
//   let userdata = {};
  async function signIn() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value === "" || password.value === "") {
      alert("fill all details");
      return;
    }

    let evalue = email.value;
    let pvalue = password.value;
    console.log(evalue + "   " + pvalue);
    try {
      let resp = await fetch(`https://dummyjson.com/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: evalue,
          password: pvalue,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .catch((error) => console.log(error));

      userId = resp.id;
      console.log(userId);
      setUserId(userId);
      navigate("profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="main">
      <div className="block">
        <div className="signup-container">
          <div className="card">
            <div>
              <p className="welcome">Welcome back 👋</p>
              <h2 className="heading">Sign in into your account</h2>
            </div>

            <div>
              <p className="label">Your email</p>
              <input className="inputData" type="text" id="email" onClick={(e) => e.preventDefault}/>

              <p className="label">Password</p>
              <input className="inputData" type="password" id="password"/>
            </div>
            
            <div>
              <button className="btn" onClick={signIn}>continue</button>
            </div>

            <div className="password">
              <p className="forgot">Forget your password?</p>
            </div>
          </div>
        </div>
        <div className="account">
          <div className="real">
            <p className="dont">Don't have an account?</p>
            <p className="sign">Sign up</p>
          </div>
        </div>
      </div>

        
    </div>
  );
};

export default Signup;