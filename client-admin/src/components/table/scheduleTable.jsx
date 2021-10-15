import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "../Dropdown/TableDropdown";

export default function ScheduleTable({ color }) {
  const doctors = [
    {
      id: 4,
      name: "dr. Ida Ayu Indira Mandini Manuaba, M.Biomed., Sp. OG",
      email: "indira.mandiri@gmail.com",
      age: 38,
      gender: "female",
      address: "Jl Raden Mataher 70, Jakarta Utara",
      role: "Doctor",
      Poli: {
        id: 1,
        name: "Kebidanan",
      },
    },
    {
      id: 5,
      name: "dr. Oka Rahmatika Noviyanti., Sp. OG",
      email: "oka.noviyanti@gmail.com",
      age: 38,
      gender: "female",
      address: "Jl Guru Mughni 127, Jakarta Utara",
      role: "Doctor",
      Poli: {
        id: 1,
        name: "Kebidanan",
      },
    },
    {
      id: 6,
      name: "dr. M. Adya F. Dilmy, Sp.OG",
      email: "adya.dilmi@gmail.com",
      age: 35,
      gender: "male",
      address: "Jl Gombel Permai X/254, Jakarta Utara",
      role: "Doctor",
      Poli: {
        id: 1,
        name: "Kebidanan",
      },
    },
    {
      id: 7,
      name: "dr. Nia Kurniati, Sp.A(K)",
      email: "nia.kurniati@gmail.com",
      age: 39,
      gender: "female",
      address: "Jl Kalilio 17-19 Ged Unas Bl D, Dki Jakarta",
      role: "Doctor",
      Poli: {
        id: 2,
        name: "Anak/Pediatrik",
      },
    },
    {
      id: 8,
      name: "dr. Ludi Dhyani Rahmartani, Sp.A",
      email: "dhyani.rahma@gmail.com",
      age: 41,
      gender: "female",
      address:
        "Jl Jend Basuki Rachmad 8-12 Plaza Tunjungan III Lt 3 303,Kedungdoro",
      role: "Doctor",
      Poli: {
        id: 2,
        name: "Anak/Pediatrik",
      },
    },
    {
      id: 9,
      name: "Dr. dr. Murti Andriastuti, Sp.A(K)",
      email: "murti.andria@gmail.com",
      age: 33,
      gender: "female",
      address: "Jl Perintis Kemerdekaan, Dki Jakarta",
      role: "Doctor",
      Poli: {
        id: 2,
        name: "Anak/Pediatrik",
      },
    },
    {
      id: 10,
      name: "dr. Yoga Devaera, Sp.A(K)",
      email: "yoga.deveara@gmail.com",
      age: 32,
      gender: "male",
      address: "Kel Paslaten Satu Lingk IV 95375, Dki Jakarta",
      role: "Doctor",
      Poli: {
        id: 2,
        name: "Anak/Pediatrik",
      },
    },
  ];
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Schedule List
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  No
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Email
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Poliklinik
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Schedule
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map((el, index) => {
                return (
                  <tr>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {index + 1}
                    </td>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <span
                        className={
                          "ml-3 font-bold " +
                          +(color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {el.name}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-email text-orange-500 mr-2"></i>{el.email}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-circle text-orange-500 mr-2"></i>{el.Poli.name}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">60%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                            <div
                              style={{ width: "60%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <TableDropdown />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
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
