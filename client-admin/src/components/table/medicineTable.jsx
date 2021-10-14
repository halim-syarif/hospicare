import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "../dropdown/TableDropdown";

export default function MedicineTable({ color }) {
  const medicineData = [
    {
      name: "Parasetamol (asetaminofen)",
      price: 20000,
      description:
        "menurunkan panas (antipiretik) dan meredakan nyeri otot atau sendi",
    },
    {
      name: "Dextromethorpan (DMP)",
      price: 25000,
      description: "meredakan batuk kering",
    },
    {
      name: "Ambroxol dan Bromexin (Mukolitik)",
      price: 28000,
      description: "meredakan batuk berdahak",
    },
    {
      name: "Parasetamol atau Asam Mefenamat",
      price: 15000,
      description: "meredakan sakit kepala",
    },
    {
      name: "Magnesium hidroksida",
      price: 30000,
      description: "mengurangi nyeri lambung dengan menetralkan asam lambung",
    },
    {
      name: "Attapulgite",
      price: 40000,
      description: 'mengurangi nyeri lambung dengan menetralkan asam lambung',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "amoxicillin",
      price: 10000,
      description: 'antibiotik',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "alogliptin",
      price: 65000,
      description: 'mengobati diabetes',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Aspirin",
      price: 15000,
      description: 'mengurangi sakit kepala',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Anastrazole",
      price: 75000,
      description: 'hormon treatment',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Benzoyl peroxide",
      price: 65000,
      description: 'mengobati jerawat',
      createdAt: new Date(),
      updatedAt: new Date()
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
                Medicine List
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
                  Price
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Description
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Completion
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
              {medicineData?.map((el, index) => {
                return (
                  <tr>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {index + 1}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {el.name}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-circle text-orange-500 mr-2"></i>{" "}
                      Rp {el.price.toLocaleString('id-ID')},-
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {el.description.length > 30 ? el.description.slice(0,30)+'...' : el.description}
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

MedicineTable.defaultProps = {
  color: "light",
};

MedicineTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
