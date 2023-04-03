import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import LoginContainer from "./LoginContainer";
import img from "../assets/Home/resume_photo.jpg";
import { rsa } from "./rsa";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(StoreContext);
  const [cookies, setCookie] = useCookies(["user"]);
  const uuser = user[0];
  const setUser = user[1];

  const navigate = useNavigate();
  useEffect(async() => {
    const rsaToken = await rsa();
    await setCookie("rsa", rsaToken, { maxAge: 3600 });

    if (cookies.rsa == "true")
      navigate("/");
    else{
      if (cookies.utoken=="true" & !(cookies.otp)) 
        navigate("/otp");
      else if (cookies.utoken=="true" & cookies.otp == "true"){
        setCookie("rsa", true, { maxAge: 3600 });
        navigate("/");
      }

    }
  }, [cookies, uuser]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("/api/users/login", { email, password });
      const { status, data } = resp;

      if (status == 200) {
        setUser(data);
        setCookie("utoken", data.success, { maxAge: 3600 });
        setCookie("utokenContent", data.token, { maxAge: 3600 });
        setCookie("loginTimestamp", data.loginTimestamp, { maxAge: 3600 });
        navigate("/otp");
      }
    } catch {}
  };

  return (
    <LoginContainer>
      <form onSubmit={submitHandler}>
        <div className="imgcontainer">
          <img src={img} alt="Edward Low" className="avatar" />
        </div>
        <div className="container">
          <label for="myemail">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="myemail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </div>

        <div className="container" style={{ "background-color": "#f1f1f1" }}>
          <button type="button" className="cancelbtn">
            Cancel
          </button>
        </div>
      </form>
    </LoginContainer>
  );
};

export default LoginScreen;
