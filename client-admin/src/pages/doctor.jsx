import React from "react";
import { Switch, Route } from "react-router";

import DoctorTable from "../components/Table/doctorTable";
import AddDoctor from "../components/Form/AddDoctor";
import { Link } from "react-router-dom";

export default function Doctor() {
  return (
    <div style={{ fontFamily: "Quiksand" }}>
      <div className="relative pb-32 pt-12 shadow-sm bg-gray-100 min-h-screen">
        <div className="flex flex-row justify-start mr-10">
          <div className="ml-10 mt-5 mb-10 text-2xl font-bold text-gray-700">
            Doctor List
          </div>
          {localStorage.getItem("role") === "Admin" ? (
            <>
              {window.location.href.indexOf("/doctor/add") !== -1 ? (
                <Link to="/doctor">
                  <div className="mt-6 ml-5 cursor-pointer">
                    <i
                      class="fas fa-times-circle"
                      style={{ color: "#059669", fontSize: 15 }}
                    ></i>
                  </div>
                </Link>
              ) : (
                <Link to="/doctor/add">
                  <div className="mt-6 ml-5 cursor-pointer">
                    <i
                      class="fas fa-plus-circle "
                      style={{ color: "#059669", fontSize: 15 }}
                    ></i>
                  </div>
                </Link>
              )}
            </>
          ) : null}
        </div>
        <div className="px-4 md:px-10 mx-auto w-full">
          <Switch>
            <Route path="/doctor" exact component={DoctorTable} />
            <Route path="/doctor/add" exact component={AddDoctor} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
