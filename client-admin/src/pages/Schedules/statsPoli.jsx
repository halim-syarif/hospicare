// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import CardPoli from "../../components/Cards/CardPoli";

export default function StatPoli() {
  const history = useHistory();
  const { poli, isLoading, errorMessage } = useSelector(
    (state) => state.scheduleState
  );

  function choosePoli(poli) {
    history.push(`/schedule/${poli.name.toLowerCase()}`);
  }


  return (
    <div>
      <div className="flex flex-wrap">
        {poli?.map((el) => {
          return (
            <div
              key={el.id}
              className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6 cursor-pointer"
              onClick={() => choosePoli(el)}
            >
              <CardPoli
                poliid={el.id}
                statSubtitle={el.name}
                statTitle={"Dokter : " + el.Employees.length}
                statPercent="25"
                statPercentColor="text-emerald-500"
                statDescription="Total patient"
                statIconName="far fa-chart-bar"
                statIconColor="bg-red-500"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
