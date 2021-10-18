import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ScheduleTable from "../components/Table/scheduleTable";
import { getPolis } from "../store/actions/schedule.js";

export default function Schedule() {
  const dispatch = useDispatch();
  const { poli, isLoading, errorMessage } = useSelector(
    (state) => state.scheduleState
  );

  useEffect(() => {
    dispatch(getPolis());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <select>
              {poli?.map((el) => {
                return (
                  <option key={el.id} value={el.id}>Poliklinik {el.name}</option>
                )
              })}
            </select>
          </div>
          <ScheduleTable />
        </div>
      </div>
    </div>
  );
}
