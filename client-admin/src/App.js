import React from "react";
import { Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./pages/home";
import Doctor from "./pages/doctor";
import Medicine from "./pages/medicine";
import Patient from "./pages/patient"
import Schedule from "./pages/schedule";

function App() {
  return (
    <>
    <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home}/>
        <Route path='/doctor' exact component={Doctor}/>
        <Route path='/medicine' exact component={Medicine}/>
        <Route path='/patient' exact component={Patient}/>
        <Route path='/schedule' exact component={Schedule}/>
        <Route path='/setting' exact component={Schedule}/>
      </Switch>
      </div>
    </>
  );
}

export default App;
