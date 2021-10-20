import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMedicines,
  deleteMed,
  fetchMedicineById,
  editMedicineData,
} from "../../store/actions/medicineAction";
import Modal from "react-modal";
Modal.setAppElement("#root");




export default function MedicineTable() {
  const medicineData = useSelector((state) => state.medicineState.medicines);
  const [medicineId, setMedicineId] = useState(null);
  const [inputForm, setInputForm] = useState({
    name: "",
    price: "",
    description: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const medicine = useSelector((state) => state.medicineState.medicine);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  // Get current medicines
  // const indexOfLastMedicine = currentPage * medicinesPerPage;
  // const indexOfFirstMedicine = indexOfLastMedicine - medicinesPerPage;
  // const currentMedicines = medicineData.rows?.slice(indexOfFirstMedicine, indexOfLastMedicine)
  // console.log(currentMedicines, "??????");

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  useEffect(() => {
    dispatch(fetchMedicines());
  }, []);

  useEffect(() => {
    if (!medicineId) {
      console.log("Invalid ID");
    } else {
      dispatch(fetchMedicineById(medicineId));
    }
  }, [medicineId]);

  useEffect(() => {
    console.log(medicine, "currentMedicine");
    if (medicine) {
      setInputForm({ ...medicine });
    }
  }, [medicine]);

  function openModal(id) {
    setMedicineId(id);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function editMedicine() {
    if (!inputForm.name || !inputForm.price || !inputForm.description) {
      setErrorMessage("Please input all field");
    } else {
      dispatch(editMedicineData(inputForm, medicineId));
      setIsOpen(false);
    }
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
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-semibold font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-semibold font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
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
                  {medicineData.rows?.map((el, index) => {
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
                          <div class="text-sm text-gray-500">{el.price}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-500">
                            {el.description}
                          </div>
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
                              onClick={() => dispatch(deleteMed(el.id))}
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
                            onChange={(e) =>
                              setInputForm({
                                ...inputForm,
                                price: e.target.value,
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
                    Description
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full">
                      <div className="relative w-full mb-6">
                        <div className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-right">
                          <input
                            onChange={(e) =>
                              setInputForm({
                                ...inputForm,
                                description: e.target.value,
                              })
                            }
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
