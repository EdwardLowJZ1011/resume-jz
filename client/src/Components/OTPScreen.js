import React, { useState, useContext, useEffect } from "react";
import img from "../assets/Home/resume_photo.jpg";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import OtpInput from "react-otp-input";
import LoginContainer from "./LoginContainer";
import Message from "../utilities/Message";
import { rsa } from "./rsa";

const OTPScreen = ({ history }) => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [OTP, setOTP] = useState("");
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState("");
  const [otpRequest, setOtpRequest] = useState();
  const navigate = useNavigate();

  useEffect(async () => {
    const rsaToken = await rsa();
    await setCookie("rsa", rsaToken, { maxAge: 3600 });

    if (cookies.rsa == "true") {
      navigate("/");
    } else {
      if (!cookies.utoken) navigate("/login");
      else if (cookies.utoken == "true" && cookies.otp == "true") {
        setCookie("rsa", true, { maxAge: 3600 });
        navigate("/");
      }
    }
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    counter == 0 && setOtpRequest(false);
  }, [counter]);

  const RequestOTP = async () => {
    try {
      const resp = await axios.post("/api/users/otp", {
        token: cookies.utoken,
      });
      const { status, data } = resp;

      if (status == 200) {
        setOtpRequest(data.success);
        setCounter(60);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    if (OTP !== "") {
      try {
        const resp = await axios.post("/api/users/verify", { otp: OTP });
        const { status, data } = resp;

        if ((status == 200) & data.success) {
          setCookie("otp", data.success, { maxAge: 3600 });
          setCookie("verifiedTimestamp", data.verifiedTimestamp, {
            maxAge: 3600,
          });
          setCookie("rsa", true, { maxAge: 3600 });
          await axios.post("/api/users/verify2", {
            verifiedTimestamp: data.verifiedTimestamp,
          });
          navigate("/");
        } else {
          setError(data.error);
        }
      } catch {}
    } else setError("Please fill OTP");

    return false;
  };

  const renderButton = () => {
    return counter > 0 && otpRequest == true ? (
      <button
        type="button"
        disabled={true}
      >{`Please wait for ${counter} sec`}</button>
    ) : (
      <button type="button" onClick={(e) => RequestOTP()}>
        Get OTP
      </button>
    );
  };

  return (
    <LoginContainer>
      <form onSubmit={verifyOTP}>
        <div className="imgcontainer">
          <img src={img} alt="Edward Low" className="avatar" />
        </div>
        <div className="container">
          {error && <Message variant="danger">{error}</Message>}
          <div className="otpHeader">
            <h5>
              <i>
                {otpRequest
                  ? "OTP have been sent, please check your registered email."
                  : "Please get your OTP from your registered Email."}
              </i>
            </h5>
          </div>
          <div className="otpBody">
            <OtpInput
              value={OTP}
              onChange={setOTP}
              numInputs={6}
              isInputSecure={true}
              inputStyle={{
                width:  window.innerHeight > 700? "4rem": "3rem",
                height: "3rem",
                fontSize:  window.innerHeight > 700? "3rem": "1rem",
                borderRadius: 4,
                border: "2px solid rgba(0,0,0,0.3)",
              }}
              separator={<span style={{ padding:  window.innerHeight > 700? "10px": "5px" }}></span>}
            />
          </div>
          <div className="otpFooter">
            <button type="submit">Submit</button>
            <br />
            {renderButton()}
          </div>
        </div>
      </form>
    </LoginContainer>
  );
};

export default OTPScreen;
