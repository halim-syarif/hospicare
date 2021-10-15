import React, { useEffect } from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "./store/actions";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./pages/home";
import Doctor from "./pages/doctor";
import Medicine from "./pages/medicine";
import Patient from "./pages/patient"
import Schedule from "./pages/schedule";

function App() {
  const dispatch = useDispatch()
  const { isLogin } = useSelector(state => state.userState)

  useEffect(() => {
    if(localStorage.getItem('access_token')){ 
      dispatch(setIsLogin(true))
    }
  },[isLogin])

  return (
    <>
    <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
      <Navbar />
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/doctor' component={Doctor}/>
        <Route path='/medicine' component={Medicine}/>
        <Route path='/patient' component={Patient}/>
        <Route path='/schedule' component={Schedule}/>
        <Route path='/setting' component={Schedule}/>
        <Redirect from='/' to='/home'/>
      </Switch>
      </div>
    </>
  );
}

export default App;
