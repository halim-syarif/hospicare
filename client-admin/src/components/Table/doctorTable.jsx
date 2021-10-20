import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { fetchDoctor, deleteDoctor, fetchOneDoctor, fetchPoli, editDoctor } from "../../store/actions/doctor";
import Modal from "react-modal"

Modal.setAppElement("#root")

export default function DoctorTable({ color }) {
  const [inputForm, setInputForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    address: "",
    role: "Doctor",
    poliId: 1
  })
  const polis = useSelector(state => state.doctorState.polis)
  const [doctorId, setDoctorId] = useState(null)
  const dispatch = useDispatch()
  const doctors = useSelector(state => state.doctorState.doctors)
  const [modalIsOpen, setIsOpen] = useState(false)
  const doctor = useSelector(state => state.doctorState.doctor)

  useEffect(() => {
      dispatch(fetchDoctor())
  }, [])
  
  useEffect(() => {
      dispatch(fetchPoli())
  }, [])

  useEffect(() => {
      if (!doctorId) {
        console.log("Invalid Id")
      } else {
        dispatch(fetchOneDoctor(doctorId))
      }
  }, [doctorId])

  useEffect(() => {
      if (doctor) {
        setInputForm({
          name: doctor.name,
          email: doctor.email,
          age: doctor.age,
          gender: doctor.gender,
          address: doctor.address,
          poliId: doctor.Poli?.id
        })
      }
  }, [doctor])

  function openModal(id) {
    setDoctorId(id)
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleEditDoctor() {
      dispatch(editDoctor(inputForm, doctorId))
      setIsOpen(false);
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
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <div className="flex flex-row justify-start">
                <div>
                  <h3
                    className={
                      "font-semibold text-lg " +
                      (color === "light" ? "text-blueGray-700" : "text-white")
                    }
                  >
                    Doctor List
                  </h3>
                </div>
                <div className="bg-blue w-24 ml-5 border">
                <Link
                  className={ "text-xs py-1 font-bold block"}
                  to="/doctor/add"
                >Add doctor</Link>
                </div>
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
                >Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.rows?.map((el, index) => {
                return (
                  <tr key={index}>
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
                      {el.Poli.name}
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
                    <div
                      onClick={() => openModal(el.id)}
                      className="cursor-pointer bg-indigo-500 w-20 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      >
                        Edit
                      </div>
                      <div>
                        <button onClick={() => dispatch(deleteDoctor(el.id))}>Delete</button>
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
                        Edit Doctor Data
                      </h6>

                      <button
                        onClick={handleEditDoctor}
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
                        Email
                      </h6>
                      <div className="flex flex-wrap">
                        <div className="w-full">
                          <div className="relative w-full mb-6">
                            <div className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-right">
                              <input
                                type="email"
                                id="price"
                                value={inputForm.email || ""}
                                onChange={(e) => setInputForm({...inputForm, email: e.target.value})}
                                placeholder="Set medicine price"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <hr className="mt-2 border-b-1 border-blueGray-300" />

                      <h6 className="text-blueGray-400 text-sm mt-3 mb-3 font-bold uppercase">
                        age
                      </h6>
                      <div className="flex flex-wrap">
                        <div className="w-full">
                          <div className="relative w-full mb-6">
                            <div className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-right">
                              <input
                                onChange={(e) => setInputForm({...inputForm, age: Number(e.target.value)})}
                                type="number"
                                value={inputForm.age || ""}
                                id="description"
                                placeholder="Set medicine detail"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="mt-2 border-b-1 border-blueGray-300" />

                      <h6 className="text-blueGray-400 text-sm mt-3 mb-3 font-bold uppercase">
                        Gender
                      </h6>
                      <div className="flex flex-wrap">
                        <div className="w-full">
                          <div className="relative w-full mb-6">
                            <div className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-right">
                              <select onChange={(e) => setInputForm({...inputForm, gender: e.target.value})} value={inputForm.gender} id="gender" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                              </select>      
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="mt-2 border-b-1 border-blueGray-300" />

                      <h6 className="text-blueGray-400 text-sm mt-3 mb-3 font-bold uppercase">
                        Poli
                      </h6>
                      <div className="flex flex-wrap">
                        <div className="w-full">
                          <div className="relative w-full mb-6">
                            <div className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-right">
                              <select onChange={(e) => setInputForm({...inputForm, poliId: Number(e.target.value)})} value={inputForm.poliId} id="poliId" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                {
                                  polis?.map(poli => (
                                      <option key={poli.id} value={poli.id}>
                                          {poli.name}
                                      </option>
                                  ))
                                }
                              </select> 
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="mt-2 border-b-1 border-blueGray-300" />

                      <h6 className="text-blueGray-400 text-sm mt-3 mb-3 font-bold uppercase">
                        Address
                      </h6>
                      <div className="flex flex-wrap">
                        <div className="w-full">
                          <div className="relative w-full mb-6">
                            <div className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-right">
                              <input
                                onChange={(e) => setInputForm({...inputForm, address: e.target.value})}
                                type="text"
                                value={inputForm.address || ""}
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

DoctorTable.defaultProps = {
  color: "light",
};

DoctorTable.propTypes = {
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
