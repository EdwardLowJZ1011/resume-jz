import React, { useState, useContext } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import chinaFlag from "../../../assets/flag/china.svg";
import ukFlag from "../../../assets/flag/UK.svg";
import myFlag from "../../../assets/flag/my.svg";
import { StoreContext } from "../../../store";

const SCREEN = {
  'EN': {"Home": "Home", "About Me": "About Me", "Resume":"Resume", 
        "Testimonial": "Testimonial", "ContactMe": "ContactMe"},
  'CN': {"Home": "主页", "About Me": "关于我", "Resume":"简历", 
        "Testimonial": "推荐", "ContactMe": "联系我"
  },
}

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);
  const { lang } = useContext(StoreContext);
  const language = lang[0];
  const setLanguage = lang[1];

  console.log(lang);
  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || currentScreen.screenInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  let currentScreenSubscription =
    ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const changeLanguage = () => {
    if (language == "EN") setLanguage("CN");
    else setLanguage("EN");

    language && sessionStorage.setItem("lang", language);
  };

  const LanguageSelector = () => {
    return (
      <img
        src={myFlag}
        width="45px"
        height="30px"
      />
    );
  };

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{SCREEN[language][screen.screen_name]}</span>
      </div>
    ));
  };

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option";
    if (index < TOTAL_SCREENS.length - 1) classes += " header-option-separator";
    if (selectedScreen === index) classes += " selected-header-option";

    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;
    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  const languageOptions = () => {
    return (
      <div class="dropdown">
        <button class="dropbtn"><b>{language == "EN" ? "EN" : "CN"}</b></button>
        <div class="dropdown-content">
          <a onClick={() => changeLanguage()}>{language == "EN" ? "CN" : "EN"}</a>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div
        className="header-container"
      >
        <div className="header-parent">
          <div
            className="header-hamburger"
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
            <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
          </div>
          <div className="header-logo">
            <span>EdwardLow</span>
          </div>
          <div
            className={
              showHeaderOptions
                ? "header-options show-hamburger-options"
                : "header-options"
            }
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
            {getHeaderOptions()}

          </div>
          <div>{languageOptions()}</div>
          <div className="header-language">{LanguageSelector()}</div>
        </div>
      </div>
    </div>
  );
}
