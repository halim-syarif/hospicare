// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import CardPoli from "../../components/Cards/CardPoli";

export default function StatPoli() {
  const dispatch = useDispatch();
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
              className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6 cursor-pointer"
              onClick={() => choosePoli(el)}
            >
              <CardPoli
                statSubtitle={el.name}
                statTitle="350,897"
                statArrow="up"
                statPercent="3.48"
                statPercentColor="text-emerald-500"
                statDescripiron="Since last month"
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
