import React from "react";
import MedicineTable from "../components/Table/medicineTable";


export default function Medicine() {
  return (
    <div style={{fontFamily: 'Quiksand'}}>
      <div className="relative pb-32 pt-12 shadow-sm bg-gray-100 min-h-screen">
      <div className="ml-10 mt-5 mb-10 text-2xl font-bold text-gray-700">Medicine List</div>
        <div className="px-4 md:px-10 mx-auto w-full">
          <MedicineTable />
        </div>
      </div>
    </div>
  );
}
