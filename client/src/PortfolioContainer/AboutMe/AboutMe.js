import React, { useEffect, useContext } from "react";
import Animations from "../../utilities/Animations";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./AboutMe.css";
import { StoreContext } from "../../../src/store";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== this.props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const { lang } = useContext(StoreContext);
  const language = lang[0];

  const SCREEN_CONSTANTS = {
    EN: {
      description:
        "Motivated, self-discipline, fast-learner, responsible and committed to works. High-performing team player in growing company.  Experienced on RPA Development, Data Analysis, Data Engineer, IoT framework, Full stack dev and ML dev.",
      highlights: {
        bullets: [
          "Full Stack Dev (React.js, Next.js, Django)",
          "Mobile Application Dev(Java, Flutter)",
          "Big Data Engineer(Hadoop, Spark)",
          "Data Analyst(PowerBI, SAS, DataFocus)",
          "Software Dev/RPA Dev(UiPath, Selenium, Appium, Cypress, Puppeteer)",
        ],
        heading: "Here are a few Highlights:",
      },
    },
    CN: {
      description:
        "有上进心、自律、学习速度快、有责任感并致力于工作。 在成长型公司中表现出色的团队成员。 具有 RPA 开发、数据分析、数据工程师、物联网框架、全栈开发和机器学习开发经验",
      highlights: {
        bullets: [
          "全栈开发(React.js, Next.js, django)",
          "移动应用开发(Java, Flutter)",
          "大数据工程师(Hadoop, Spark)",
          "数据分析师(PowerBI, SAS, DataFocus)",
          "软件工程师/RPA工程师(UiPath, Selenium, Appium, Cypress, Puppeteer)",
        ],
        heading: "Here are a few Highlights:",
      },
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS[language].highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why choose me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS[language].description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS[language].highlights.heading}</span>
              </div>
              {renderHighlight()}
              {language == "EN" ? (
                <div className="about-me-options">
                  <button className="btn primary-btn">Contact Me</button>
                  <a href="" download="Edward Low Resume.pdf">
                    <button className="btn highlighted-btn" disabled> Get Resume</button>
                  </a>
                </div>
              ) : (
                <div className="about-me-options">
                  <button className="btn primary-btn">联系</button>
                  <a href="" download="Edward Low Resume.pdf">
                    <button className="btn highlighted-btn" disabled> 简历</button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
