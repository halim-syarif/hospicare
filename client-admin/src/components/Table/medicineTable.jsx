import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { fetchMedicines, deleteMed, fetchMedicineById, editMedicineData } from "../../store/actions/medicineAction";
import Modal from "react-modal";
import Pagination from "../Pagination/pagination"
// import ReactPaginate from "react-paginate"



// components
Modal.setAppElement("#root");
export default function MedicineTable({ color }) {
  const medicineData = useSelector(state => state.medicineState.medicines)
  const [medicineId, setMedicineId] = useState(null)
  const [inputForm, setInputForm] = useState({
      name: "",
      price: "",
      description: ""
  })

  const [errorMessage, setErrorMessage] = useState("")
  const [modalIsOpen, setIsOpen] = useState(false);
  const medicine = useSelector(state => state.medicineState.medicine)
  const dispatch = useDispatch()


  const [currentPage, setCurrentPage] = useState(1)
  // const [loading, setLoading] = useState(false)
  const [medicinesPerPage] = useState(20)

  // Get current medicines
  // const indexOfLastMedicine = currentPage * medicinesPerPage;
  // const indexOfFirstMedicine = indexOfLastMedicine - medicinesPerPage;
  // const currentMedicines = medicineData.rows?.slice(indexOfFirstMedicine, indexOfLastMedicine)
  // console.log(currentMedicines, "??????");

   // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);



  useEffect(() => {
      dispatch(fetchMedicines())
  }, [])

  useEffect(() => {
      if (!medicineId) {
        console.log("Invalid ID")
      } else {
        dispatch(fetchMedicineById(medicineId))
      }
  }, [medicineId])

  useEffect(() => {
    console.log(medicine, "currentMedicine")
      if (medicine) {
        setInputForm({ ...medicine})
      }
  }, [medicine])

  function openModal(id) {
    setMedicineId(id)
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function editMedicine() {
      if (!inputForm.name || !inputForm.price || !inputForm.description) {
          setErrorMessage("Please input all field")
      } else {
          dispatch(editMedicineData(inputForm, medicineId))
          setIsOpen(false)
      }
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
                
                <Pagination
                  medicinesPerPage={medicinesPerPage}
                  totalMedicines={medicineData.count}
                  paginateBack={paginateBack}
                  paginateFront={paginateFront}
                  currentPage={currentPage}
                />
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
                      <div
                      onClick={() => openModal(el.id)}
                      className="cursor-pointer bg-indigo-500 w-20 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      >
                        Edit
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

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
                <div className="rounded-t border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1"></div>
                <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-100 border-0">
                  <div className="rounded-t bg-white mb-0 px-6 py-3">
                    <div className="text-center flex justify-between">
                      <h6 className="text-blueGray-700 text-xl font-bold">
                        Edit Medicine Data
                      </h6>

                      <button
                        onClick={editMedicine}
                        className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="flex-auto w-full px-4 lg:px-10 py-10 pt-0">
                    <form>
                      <h6 className="text-blueGray-400 text-sm mt-3 mb-3 font-bold uppercase">
                        Name
                      </h6>
                      <div className="flex flex-wrap">
                        <div className="w-full">
                          <div className="relative w-full mb-3">
                          <input
                                type="text"
                                id="name"
                                onChange={(e) => setInputForm({...inputForm, name: e.target.value})}
                                value={inputForm.name || ""}
                                placeholder="Medicine name"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              />
                          </div>
                        </div>
                      </div>

                      <hr className="mt-2 border-b-1 border-blueGray-300" />

                      <h6 className="text-blueGray-400 text-sm mt-3 mb-3 font-bold uppercase">
                        Price
                      </h6>
                      <div className="flex flex-wrap">
                        <div className="w-full">
                          <div className="relative w-full mb-6">
                            <div className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-right">
                              <input
                                type="number"
                                id="price"
                                value={inputForm.price || ""}
                                onChange={(e) => setInputForm({...inputForm, price: e.target.value})}
                                placeholder="Set medicine price"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <hr className="mt-2 border-b-1 border-blueGray-300" />

                      <h6 className="text-blueGray-400 text-sm mt-3 mb-3 font-bold uppercase">
                        Description
                      </h6>
                      <div className="flex flex-wrap">
                        <div className="w-full">
                          <div className="relative w-full mb-6">
                            <div className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-right">
                              <input
                                onChange={(e) => setInputForm({...inputForm, description: e.target.value})}
                                type="text"
                                value={inputForm.description || ""}
                                id="description"
                                placeholder="Set medicine detail"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
      </div>
        </Modal>
    </>
  );
}

MedicineTable.defaultProps = {
  color: "light",
};

MedicineTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxHeight: "80%",
    transform: "translate(-50%, -50%)",
    border: "none",
    minWidth: "640px",
  },
};