import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./login/login";
import Homepage from "./homepage/homepage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeePage from "./employee/employee";
import Devicepage from "./device/device";
import SoftwaresPage from "./softwares/softwares";
import Licensepage from "./license/license";
import App from "./dummynav";
import Dummy from "./dummynav";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="" Component={Login} />
        <Route path="/homepage" Component={Homepage} />
        <Route path="/employee" Component={EmployeePage} />
        <Route path="/device" Component={Devicepage} />
        <Route path="/softwares" Component={SoftwaresPage} />
        <Route path="/license" Component={Licensepage} />
        <Route path="/dummy" Component={Dummy}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
