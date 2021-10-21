// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getPatients, setPatients } from "../../store/actions/schedule";
import { setSuccessMessage, updateHistory } from "../../store/actions/history";
import { fetchMedicines } from "../../store/actions/medicineAction";

Modal.setAppElement("#root");
export default function SchedulePatient() {
  const dispatch = useDispatch();
  const [BookingScheduleId, setBookingScheduleId] = useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [findMedicine, setfindMedicine] = useState([]);
  const [diagnosa, setdiagnosa] = useState("");
  const [blankField, setBlankField] = useState({
    diagnosis: false,
    medicine: false,
  });
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const { medicines } = useSelector((state) => state.medicineState);
  const { patients } = useSelector((state) => state.scheduleState);
  const { successMessage, isLoading: historyLoading } = useSelector(
    (state) => state.historyState
  );
  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  
  function openModal() {
    setIsOpen(true);
    setSelectedMedicines([]);
    setdiagnosa('')
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedMedicines([]);
    setdiagnosa('')
  }
  useEffect(() => {
    dispatch(
      getPatients(selectedDay)
    );
  }, [selectedDay]);

  useEffect(() => {
    dispatch(getPatients(selectedDay));
    dispatch(fetchMedicines());
  }, []);

  function selectHandle(target) {
    setSelectedMedicines([...selectedMedicines, target]);
    setfindMedicine([]);
    document.getElementById("searchMedicine").value = "";
  }

  function filterMedicine(e) {
    const newList = medicines.rows.filter((el) =>
      el.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setfindMedicine(newList);
  }

  function deleteMedicineList(id) {
    const newList = selectedMedicines.filter((el) => el.id !== id);
    setSelectedMedicines(newList);
  }

  useEffect(() => {
    if (diagnosa) {
      setBlankField({
        ...blankField,
        diagnosis: false,
      });
    }
  }, [diagnosa]);

  useEffect(() => {
    if (selectedMedicines) {
      setBlankField({
        ...blankField,
        medicine: false,
      });
    }
  }, [selectedMedicines]);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      dispatch(setSuccessMessage(""));
      closeModal();
      dispatch(getPatients(selectedDay));
    }
  }, [successMessage]);

  function hidePatient(id) {
    const newPatientList = patients.filter((el) => el.id !== id);
    dispatch(setPatients(newPatientList));
  }

  function updateDataPatient() {
    if (!diagnosa) {
      return setBlankField({
        ...blankField,
        diagnosis: true,
      });
    }
    if (!selectedMedicines.length) {
      return setBlankField({
        ...blankField,
        medicine: true,
      });
    }
    dispatch(
      updateHistory({
        BookingScheduleId,
        medicine_list: selectedMedicines,
        description: diagnosa,
      })
    );
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
      <ToastContainer />
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-6">
          <div
            style={{ minHeight: 300, maxHeight: 500 }}
            className="overflow-y-auto relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
          >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    Daftar Pasien
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 w-10 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                      Antrian
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                      Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                      Keluhan
                    </th>
                    <th className="px-6 bg-blueGray-50 max-w-20 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {patients?.map((el, index) => {
                    return (
                      <tr key={el.id}>
                        <th className="border-t-0 text-center align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          {el.antrian}
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {el.Patient.name}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {el.keluhan}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex flex-row justify-center">
                            {el.status ? (
                              <div
                                style={{ backgroundColor: "#10B981" }}
                                className="min-w-24 text-white text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              >
                                Updated
                              </div>
                            ) : (
                              <div
                                onClick={() => {
                                  setBookingScheduleId(el.id);
                                  openModal();
                                }}
                                className="cursor-pointer bg-indigo-500 min-w-24 text-white active:bg-indigo-600 text-xs font-bold uppercase px-4 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              >
                                Update
                              </div>
                            )}
                            <div
                              onClick={() => hidePatient(el.id)}
                              className="cursor-pointer bg-red-500 w-20 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none ml-3 mb-1 ease-linear transition-all duration-150"
                            >
                              Hide
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
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded"
            }
          >
            <div className="rounded-t border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1"></div>
                <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-100 border-0">
                  <div className="rounded-t bg-white mb-0 px-6 py-3">
                    <div className="text-center flex justify-between">
                      <h6 className="text-blueGray-700 text-xl font-bold">
                        Update Data Pasien
                      </h6>

                      <button
                        onClick={updateDataPatient}
                        className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        {!historyLoading ? "Save" : (
                        <span className="mt-1">
                          <ScaleLoader
                            color="lightBlue"
                            loading={historyLoading}
                            css={override}
                            height="15px"
                            width="2px"
                          />
                          
                        </span>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex-auto w-full px-4 lg:px-10 py-10 pt-0">
                    <form>
                      {/* <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        Patient Information
                      </h6>
                      <div className="flex flex-col justify-start">
                        <div className="flex flex-row w-1/2">
                          <div className="relative mb-3 w-1/2">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-1"
                              htmlFor="grid-password"
                            >
                              Full Name
                            </label>
                          </div>
                          <div className="relative mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-1"
                              htmlFor="grid-password"
                            >
                              : Tono Sugiono
                            </label>
                          </div>
                        </div>
                        <div className="flex flex-row w-1/2">
                          <div className="relative mb-3 w-1/2">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-1"
                              htmlFor="grid-password"
                            >
                              Gender
                            </label>
                          </div>
                          <div className="relative mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-1"
                              htmlFor="grid-password"
                            >
                              : Male
                            </label>
                          </div>
                        </div>
                        <div className="flex flex-row w-1/2">
                          <div className="relative mb-3 w-1/2">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-1"
                              htmlFor="grid-password"
                            >
                              Age
                            </label>
                          </div>
                          <div className="relative mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-1"
                              htmlFor="grid-password"
                            >
                              : 25 Tahun
                            </label>
                          </div>
                        </div>
                      </div> */}

                      {/* <hr className="mt-2 border-b-1 border-blueGray-300" /> */}

                      <h6 className="text-blueGray-400 text-sm mt-3 mb-3 font-bold uppercase">
                        Diagnosa
                      </h6>
                      <div className="flex flex-wrap">
                        <div className="w-full">
                          <div className="relative w-full mb-3">
                            <textarea
                              onChange={(e) => setdiagnosa(e.target.value)}
                              type="text"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="type your diagnosis"
                            />
                            {blankField.diagnosis ? (
                              <div style={{ color: "#EF4444", fontSize: 12 }}>
                                please give patient diagnosis
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <hr className="mt-2 border-b-1 border-blueGray-300" />

                      <h6 className="text-blueGray-400 text-sm mt-3 mb-3 font-bold uppercase">
                        Obat
                      </h6>
                      <div className="flex flex-wrap">
                        <div className="w-full">
                          <div className="relative w-full mb-6">
                            <div className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-right">
                              <input
                                type="text"
                                id="searchMedicine"
                                onKeyUp={filterMedicine}
                                placeholder="type your medicine"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              />
                              {findMedicine.map((el) => {
                                return (
                                  <div
                                    key={el.id}
                                    onClick={() => selectHandle(el)}
                                    className="bg-white text-sm z-50 float-left py-2 px-3 list-none text-left shadow-lg w-full cursor-pointer"
                                  >
                                    {el.name}
                                  </div>
                                );
                              })}
                            </div>
                            {blankField.medicine ? (
                              <div
                                className="mt-2"
                                style={{ color: "#EF4444", fontSize: 12 }}
                              >
                                please select atleast 1 medicine
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      {selectedMedicines?.map((el) => {
                        return (
                          <div key={el.id} className="flex flex-row w-full">
                            <div
                              className="relative mb-3"
                              style={{ width: "25%" }}
                            >
                              <label
                                className="block text-blueGray-600 text-xs font-bold mb-1"
                                htmlFor="grid-password"
                              >
                                {el.name}
                              </label>
                            </div>
                            <div
                              className="relative mb-3"
                              style={{ width: "25%" }}
                            >
                              <input
                                type="number"
                                className="h-5 text-xs w-1/2 px-1"
                                defaultValue="2"
                                min="1"
                              />
                              <span className="relative ml-2 text-blueGray-600 text-xs mb-1">
                                x sehari
                              </span>
                            </div>
                            <div
                              className="relative mb-3 flex flex-row justify-between"
                              style={{ width: "50%" }}
                            >
                              <div>
                                <input
                                  defaultChecked
                                  type="radio"
                                  name={`dosis${el.id}`}
                                  className="ml-3"
                                />
                                <span className="relative ml-1 text-blueGray-600 text-xs ">
                                  sebelum makan
                                </span>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  name={`dosis${el.id}`}
                                  className=""
                                />
                                <span className="relative ml-1 text-blueGray-600 text-xs ">
                                  sesudah makan
                                </span>
                              </div>
                              <div
                                className="cursor-pointer"
                                onClick={() => deleteMedicineList(el.id)}
                              >
                                <i className="fas fa-trash-alt"></i>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

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

const override = css`
  display: block;
  margin: 0 auto;
  border-color: lime;
`;

