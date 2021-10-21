// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import appApi from "../../store/config/instanceAxios";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function CardPoli({
  poliid,
  statSubtitle,
  statTitle,
  statPercentColor,
  statDescription,
  statIconName,
  statIconColor,
}) {
  const [patient, setPatient] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    appApi
      .get(`/schedules/${poliid}/${new Date().getDay()}`)
      .then((response) => {
        let totalPatient = 0;
        response.data.forEach((el) => {
          totalPatient += el.BookingSchedules.length;
        });
        setPatient(totalPatient);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
      // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-700 normalcase font-bold text-sm ">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xs text-blueGray-400">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className="whitespace-nowrap">{statDescription} </span>

            {loading ? (
              <span className={statPercentColor + "pt-2 ml-5"}>
                <ScaleLoader
                  color="lightBlue"
                  loading={loading}
                  height="10px"
                  width="2px"
                />
              </span>
            ) : (
              <span className={statPercentColor + " mr-2"}>
                {patient} orang
              </span>
            )}
          </p>
        </div>
      </div>
    </>
  );
}

CardPoli.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardPoli.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  statIconColor: PropTypes.string,
};

