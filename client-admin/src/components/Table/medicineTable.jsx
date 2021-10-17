import React, {useEffect} from "react";
import PropTypes from "prop-types"
import {useDispatch, useSelector} from "react-redux"
import { fetchMedicines, deleteMed } from "../../store/actions/medicineAction";
import ReactPaginate from "react-paginate"



// components

export default function MedicineTable({ color }) {
  const medicineData = useSelector(state => state.medicineState.medicines)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchMedicines())
  }, [])

  function handleEdit(id) {
      //redirect / tampilkan form edit
      console.log(id);
  }

  function handleDelete(e, id) {
    
  }

  
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap w-full items-center">
            <div className="flex flex-row w-full justify-between">
              <div className=" px-2 ">
                <h3
                  className={
                    "font-semibold text-lg " +
                    (color === "light" ? "text-blueGray-700" : "text-white")
                  }
                >
                  Medicine List
                </h3>
              </div>
              <div>
                Pagination
              {/* <ReactPaginate 
                containerClassName={"pagination"}
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                activeClassName={"active"}
                >
                </ReactPaginate> */}
              </div>
             
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
                  Action
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
              {/* {
                  <tr>
                    <td>{console.log(medicineData, "~~~~~~~~~~")}</td>
                  </tr>
              } */}

              {medicineData.rows?.map((el, index) => {
                return (
                  <tr key={index}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {index + 1}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {el.name}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      Rp{" "}
                      {el.price.toLocaleString("id-ID")},-
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {el.description.length > 30
                        ? el.description.slice(0, 30) + "..."
                        : el.description}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div>
                        <button className="bg-gray-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded" onClick={() => handleEdit(el.id)}>Edit</button>
                      </div>
                      <div>
                        <button onClick={() => dispatch(deleteMed(el.id))}>Delete</button>
                      </div>
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
