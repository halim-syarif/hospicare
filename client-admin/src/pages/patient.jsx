import React from "react";

import PatientTable from "../components/Table/patientTable";

export default function Patient() {
  return (
    <div>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
        <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <PatientTable />
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
