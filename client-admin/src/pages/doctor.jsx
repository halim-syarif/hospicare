import React from "react";

import DoctorTable from "../components/Table/doctorTable";

export default function Doctor() {
  return (
    <div>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
        <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <DoctorTable />
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
