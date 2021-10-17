import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import TableDropdown from "../Dropdown/TableDropdown";
import { useDispatch, useSelector } from "react-redux";
import { getSchedules } from "../../store/actions/schedule";

export default function ScheduleTable({ color, poliid }) {
  const dispatch = useDispatch();
  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  const [selectedDay, setSelectedDay] = useState(1);
  const { schedules, isloading, errorMessage } = useSelector(
    (state) => state.scheduleState
  );

  const docters = [
    {
      name: "dokter budi",
      jam: "12.00-16.00",
      patients: [
        {
          id: 1,
          name: "patient1",
        },
        {
          id: 1,
          name: "patient2",
        },
        {
          id: 2,
          name: "patient3-2",
        },
        {
          id: 2,
          name: "patient3-2",
        },
      ],
    },
    {
      name: "dokter tono",
      jam: "12.00-16.00",
      patients: [
        {
          id: 1,
          name: "patient2-2",
        },
        {
          id: 2,
          name: "patient2-2",
        },
      ],
    },
    {
      name: "dokter tuti",
      jam: "12.00-16.00",
      patients: [
        {
          id: 1,
          name: "patient3-1",
        },
        {
          id: 2,
          name: "patient3-2",
        },
        {
          id: 2,
          name: "patient3-2",
        },
        {
          id: 2,
          name: "patient3-2",
        },
        {
          id: 2,
          name: "patient3-2",
        },
      ],
    },
  ];

  useEffect(() => {
    dispatch(
      getSchedules({
        poliid: poliid,
        dayid: 1,
      })
    );
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        {docters.map((el) => {
          return (
            <div key={el} className="w-full lg:w-6/12 xl:w-2/12 px-4 mb-6">
              <div
                style={{ minHeight: 300, maxHeight: 300 }}
                className="overflow-y-auto relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
              >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">
                        {el.name}
                      </h3>
                    </div>
                    <div className="relative flex-grow flex-1 text-right">
                      <div
                        className="bg-indigo-500 w-20 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="div"
                      >
                        Jam {el.jam}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-6 bg-blueGray-50 w-10 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          Antrian
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          Name
                        </th>
                        <th className="px-6 bg-blueGray-50 max-w-20 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {el.patients.map((patients) => {
                        return (
                          <tr>
                            <th className="border-t-0 text-center align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {patients.id}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {patients.name}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <div className="flex flex-row justify-between ">
                                <div className="cursor-pointer">
                                  <i class="fas fa-check-circle"></i>
                                </div>
                                <div className="cursor-pointer">
                                  <i class="fas fa-minus-circle"></i>
                                </div>
                                <div className="cursor-pointer">
                                  <i class="fas fa-paper-plane"></i>
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

ScheduleTable.defaultProps = {
  color: "light",
};

ScheduleTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
