import React from "react";

import MedicineTable from "../components/Table/medicineTable";

export default function Medicine() {
  return (
    <div>
      <div className="relative md:pt-32 pb-32 pt-12" style={{backgroundColor:"#009387"}}>
        <div className="px-4 md:px-10 mx-auto w-full">
        <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <MedicineTable />
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
