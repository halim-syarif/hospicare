import React from "react";
import { Switch, Route, Redirect } from "react-router";


import DoctorTable from "../components/Table/doctorTable";
import AddDoctor from "../components/Form/AddDoctor";


export default function Doctor(props) {
  console.log(props);
  return (
    <div>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
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
