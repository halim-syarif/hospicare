import React from "react";

import PatientTable from "../components/Table/patientTable";

export default function Patient() {
  return (
    <div style={{fontFamily: 'Quiksand'}}>
      <div className="relative pb-32 pt-12 shadow-sm bg-gray-100 min-h-screen">
        <div className="ml-10 mt-5 mb-10 text-2xl font-bold text-gray-700">Patient List</div>
        <div className="px-4 md:px-10 mx-auto w-full">
          <PatientTable />
        </div>
      </div>
    </div>
  );
}
