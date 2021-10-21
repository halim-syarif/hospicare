import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDoctor,
  deleteDoctor,
  fetchOneDoctor,
  fetchPoli,
  editDoctor,
} from "../../store/actions/doctor";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function DoctorTable({ color }) {
  const [inputForm, setInputForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    address: "",
    role: "Doctor",
    poliId: 1,
  });
  const polis = useSelector((state) => state.doctorState.polis);
  const [doctorId, setDoctorId] = useState(null);
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctorState.doctors);
  const [modalIsOpen, setIsOpen] = useState(false);
  const doctor = useSelector((state) => state.doctorState.doctor);

  useEffect(() => {
    dispatch(fetchDoctor());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(fetchPoli());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!doctorId) {
      console.log("Invalid Id");
    } else {
      dispatch(fetchOneDoctor(doctorId));
    }
    // eslint-disable-next-line
  }, [doctorId]);

  useEffect(() => {
    if (doctor) {
      setInputForm({
        name: doctor.name,
        email: doctor.email,
        age: doctor.age,
        gender: doctor.gender,
        address: doctor.address,
        poliId: doctor.Poli?.id,
      });
    }
  }, [doctor]);

  function openModal(id) {
    setDoctorId(id);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleEditDoctor() {
    dispatch(editDoctor(inputForm, doctorId));
    setIsOpen(false);
  }

  return (
    <>
      <div class="flex flex-col text-left">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-semibold font-medium text-gray-500 uppercase tracking-wider"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-semibold font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nama
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-semibold font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Poliklinik
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-semibold font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    {localStorage.getItem("role") === "Admin" ? (
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-semibold font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Action
                      </th>
                    ) : null}
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {doctors?.rows?.map((el, index) => {
                    return (
                      <tr key={el.id}>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="text-sm font-bold text-gray-900">
                              {index + 1}
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-500">{el.name}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-500">
                            {el.Poli.name}
                          </div>
                        </td>

                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-500">{el.email}</div>
                        </td>
                        {localStorage.getItem("role") === "Admin" ? (
                          <td class="px-6 py-4 whitespace-nowrap flex flex-row">
                            <div
                              className="cursor-pointer"
                              onClick={() => openModal(el.id)}
                            >
                              <i
                                class="fas fa-edit "
                                style={{ color: "#059669", fontSize: 15 }}
                              ></i>
                            </div>
                            <div
                              className="cursor-pointer ml-5"
                              onClick={() => dispatch(deleteDoctor(el.id))}
                            >
                              <i
                                class="fas fa-trash-alt "
                                style={{ color: "#EF4444", fontSize: 15 }}
                              ></i>
                            </div>
                          </td>
                        ) : null}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
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
                          onChange={(e) =>
                            setInputForm({ ...inputForm, name: e.target.value })
                          }
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
                            onChange={(e) =>
                              setInputForm({
                                ...inputForm,
                                email: e.target.value,
                              })
                            }
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
                            onChange={(e) =>
                              setInputForm({
                                ...inputForm,
                                age: Number(e.target.value),
                              })
                            }
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
                          <select
                            onChange={(e) =>
                              setInputForm({
                                ...inputForm,
                                gender: e.target.value,
                              })
                            }
                            value={inputForm.gender}
                            id="gender"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          >
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
                          <select
                            onChange={(e) =>
                              setInputForm({
                                ...inputForm,
                                poliId: Number(e.target.value),
                              })
                            }
                            value={inputForm.poliId}
                            id="poliId"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          >
                            {polis?.map((poli) => (
                              <option key={poli.id} value={poli.id}>
                                {poli.name}
                              </option>
                            ))}
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
                            onChange={(e) =>
                              setInputForm({
                                ...inputForm,
                                address: e.target.value,
                              })
                            }
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
