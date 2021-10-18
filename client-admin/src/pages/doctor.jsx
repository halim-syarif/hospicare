import React from "react";
import { Switch, Route } from "react-router";


import DoctorTable from "../components/Table/doctorTable";
import AddDoctor from "../components/Form/AddDoctor";


export default function Doctor() {
  return (
    <div>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12 min-h-screen">
        <div className="px-4 md:px-10 mx-auto w-full">
          <Switch>
            <Route path='/doctor' exact component={DoctorTable}/>
            <Route path='/doctor/add' exact component={AddDoctor} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
