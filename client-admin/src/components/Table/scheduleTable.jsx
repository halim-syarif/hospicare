import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import TableDropdown from "../Dropdown/TableDropdown";
import { useDispatch, useSelector } from "react-redux";
import { getSchedules } from "../../store/actions/schedule";

export default function ScheduleTable({ poliid }) {
  const dispatch = useDispatch();
  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const [filterChecked, setFilterChecked] = useState([])
  const [schedulesList, setSchedulesList] = useState([])
  const { schedules, isloading, errorMessage } = useSelector(
    (state) => state.scheduleState
  );

  useEffect(() => {
    setSchedulesList(schedules.map(el => {
      if(filterChecked.includes(el.id)){
        const newList = el.BookingSchedules.filter(booking => !booking.status)
        el.BookingSchedules = newList
        return el
      } else {
        return el
      }
    }))
  },[schedules, filterChecked])

  useEffect(() => {
    dispatch(
      getSchedules({
        poliid: poliid,
        dayid: selectedDay,
      })
    );
  }, [selectedDay]);

  function hideCheckedPatient(bookingId){
    if(!filterChecked.includes(bookingId)){
      setFilterChecked([
        ...filterChecked,
        bookingId
      ])
    } else {
      setFilterChecked(filterChecked.filter(el => el !== bookingId))
    }
  }

  return (
    <>
      <div
        className="flex flex-row"
        style={{
          marginTop: -32,
          maxWidth: "10%",
          marginLeft: 16,
          marginBottom: 10,
        }}
      >
        {days.map((el, index) => {
          return (
            <div
              key={index}
              onClick={() => setSelectedDay(index+1)}
              className={
                "cursor-pointer text-white text-xs font-bold uppercase px-2 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                  (selectedDay === index + 1
                  ? "bg-green-500"
                  : "bg-gray-500")
              }
            >
              {el}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap">
        {schedulesList?.map((el) => {
          return (
            <div key={el.id} className="w-full lg:w-6/12 xl:w-2/12 px-4 mb-6">
              <div
                style={{ minHeight: 300, maxHeight: 300 }}
                className="overflow-y-auto relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
              >
                <div className="rounded-t mb-0 px-4 py-3 border-0 w-full">
                  <div className="flex flex-row justify-between">
                    <div className="relative ">
                      <h3 className="font-semibold text-base text-blueGray-700">
                        {el.Employee.name.length > 35
                          ? el.Employee.name.slice(0, 30) + " ..."
                          : el.Employee.name}
                      </h3>
                    </div>
                    <div className="relative text-right">
                      <div className="flex flex-row">
                        <div
                          className="bg-indigo-500 justify-end text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="div"
                        >
                          Jam {el.start_hour.slice(0, 5)} -{" "}
                          {el.end_hour.slice(0, 5)}
                        </div>
                        <div 
                          onClick={() => {hideCheckedPatient(el.id)}}
                          className="text-xs pt-1 pl-2 cursor-pointer">
                          <i className="fas fa-sliders-h"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-3 bg-blueGray-50 w-10 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          Antrian
                        </th>
                        <th className="px-5 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          Name
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          Status
                        </th>
                        <th className="px-6 bg-blueGray-50 max-w-20 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {el.BookingSchedules.map((patients) => {
                        return (
                          <tr key={patients.id}>
                            <th className="border-t-0 text-center align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {patients.antrian}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {patients.Patient.name}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {patients.status ? "checked" : "unchecked"}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <div className="flex flex-row justify-between ">
                                <div className="cursor-pointer">
                                  <i className="fas fa-minus-circle"></i>
                                </div>
                                <div className="cursor-pointer">
                                  <i className="fas fa-paper-plane"></i>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
