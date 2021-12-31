import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import MyCert from "./Components/mycert";
import Login from "./Components/LoginScreen.js";

import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faSortNumericDown,
  faSortNumericUp } from '@fortawesome/free-solid-svg-icons';
import OTPScreen from "./Components/OTPScreen";

config.autoAddCss = false;
library.add(
  faSortNumericDown,
  faSortNumericUp); 


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< PortfolioContainer />}></Route>
          <Route exact path='/mycertificate' element={< MyCert />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/otp' element={< OTPScreen />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
