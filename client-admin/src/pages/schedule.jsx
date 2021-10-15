import React from "react";

import ScheduleTable from "../components/Table/scheduleTable";

export default function Schedule() {
  return (
    <div>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <ScheduleTable />
        </div>
      </div>
    </div>
  );
}
