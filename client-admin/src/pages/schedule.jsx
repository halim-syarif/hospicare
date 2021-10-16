// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from 'react-router-dom'

import ScheduleTable from "../components/Table/scheduleTable";
import StatPoli from "./Schedules/statsPoli";
import CardPoli from "../components/Cards/CardPoli";
import { getPolis } from "../store/actions/schedule.js";

export default function Schedule() {
  const dispatch = useDispatch();
  const { poli, isLoading, errorMessage } = useSelector(
    (state) => state.scheduleState
  );

  return (
    <div>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <Switch>
            <Route path="/schedule" exact component={StatPoli} />
            {
              poli.map(el => {
                return (
                  <Route path={`/schedule/${el.name.toLowerCase()}`} >
                    <ScheduleTable poliid={el.id}/>
                  </Route>
                )
              })
            }
          </Switch>
        </div>
      </div>
    </div>
  );
}
