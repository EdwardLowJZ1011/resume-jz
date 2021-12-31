import React, { useContext } from "react";
import Typical from "react-typical";
import "./Profile.css";
import { StoreContext } from "../../../store";
import { useCookies } from "react-cookie";
import { saveFile } from "../../../utilities/ResumeDownload";

export default function Profile() {
  const { lang } = useContext(StoreContext);
  const language = lang[0];
  const [cookies] = useCookies(["user"]);


  const roles = {
    EN: [
      "Machine Learning Dev",
      2000,
      "RPA Dev",
      2000,
      "Full Stack Dev",
      2000,
      "Data Engineer",
      2000,
      "Data Analyst",
      2000,
    ],
    CN: [
      "机器学习工程师",
      2000,
      "爬虫工程师",
      2000,
      "全栈工程师",
      2000,
      "数据工程师",
      2000,
      "数据分析员",
      2000,
    ],
  };

  const getResume = {
    EN: {
      contact:"Contact Me",
      download:"Get Resume"
    },
    CN:{
      contact:"联系",
      download:"简历"
    }
  }
  console.log(cookies)
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              {/* <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a> */}
            </div>
          </div>
          <div className="profile-details-name">
            {language == "EN" ? (
              <span className="primary-text">
                Hello I am <span className="highlighted-text">Jin Zhang</span>
              </span>
            ) : (
              <span className="primary-text">
                <span className="highlighted-text">刘晋彰</span>
              </span>
            )}
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical loop={Infinity} steps={roles[language]}></Typical>
              </h1>
              {language == "EN" ? (
                <span className="profile-role-tagline">
                  60 certificates (AlgoExpert, Coursera, Udemy), experienced on reactjs, flutter, Django, spark, ML.
                </span>
              ) : (
                <span className="profile-role-tagline">
                  共获得60张技术证书(AlgoExpert, Coursera, Udemy)，具有reactjs, flutter, Django, spark, ML等开发能力。
                </span>
              )}
            </span>
          </div>
          <div>
            <button className="btn primary-btn"><a style={{color: "white", textDecoration: "none"}} href='#ContactMe'>{getResume && getResume[language].contact}</a></button>
            {/* <a href={cookies.token && pdf} download="Edward Low.pdf"> */
            }
              {cookies.utoken ? <button className="btn highlighted-btn" onClick={e=>saveFile()}>{getResume[language].download }</button>: <button className="btn highlighted-btn" disabled>{getResume[language].download}</button>}
            {/* </a> */}
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
