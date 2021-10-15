import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "../Dropdown/TableDropdown";

export default function PatientTable({ color }) {
  const patients = [
    {
      name: "Jamil Rajasa",
      age: 25,
      gender: "male",
      address: "Jl Biduri Bulan Bl N/10, Dki Jakarta",
      email: "jamilrsa@yahoo.com",
      imgUrl: 'https://www.random-name-generator.com/images/faces/male-asia/19.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Karen Uyainah",
      age: 28,
      gender: "female",
      address: "Jl Suci 11, Dki Jakarta",
      email: "novitasari.ayu@kuswandari.asia",
      imgUrl: "https://www.random-name-generator.com/images/faces/female-asia/13.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Karen Uyainah",
      age: 30,
      gender: "female",
      address: "Jl Jend Sudirman 45, Jakarta Timur",
      email: "ratih.mulyani@wulandari.in",
      imgUrl: "https://www.random-name-generator.com/images/faces/female-asia/04.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Maryadi Firgantoro",
      age: 35,
      gender: "male",
      address: "Proy Senen Bl IV/4, Dki Jakarta",
      email: "luwar.sinaga@yahoo.com",
      imgUrl: "https://www.random-name-generator.com/images/faces/male-asia/22.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Kartika Usamah",
      age: 30,
      gender: "female",
      address: "Jl Melasti 18 A, Dki Jakarta",
      email: "adriansyah.laila@yahoo.com",
      imgUrl: "https://www.random-name-generator.com/images/faces/female-asia/22.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
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
                Patient List
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
                  Age
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Genre
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Address
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
                ></th>
              </tr>
            </thead>
            <tbody>
              {patients?.map((el, index) => {
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
                      {el.age}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {el.gender}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {el.address}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {el.email}
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

PatientTable.defaultProps = {
  color: "light",
};

PatientTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
