import React from "react";
import { Route, Switch} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Home from "./pages/home";
import Doctor from "./pages/doctor";
import Navbar from "./components/Navbar";
import Medicine from "./pages/medicine";

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
      </Switch>
      </div>
    </>
  );
}

export default App;
