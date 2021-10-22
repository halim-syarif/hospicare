import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatient } from "../../store/actions/userAction";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: lime;
`;

export default function PatientTable() {
  const dispatch = useDispatch();
  const { patients, isLoading } = useSelector((state) => state.userState);
  useEffect(() => {
    dispatch(getPatient());
  }, []);

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
                      Age
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-semibold font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Genre
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-semibold font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-semibold font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                  </tr>
                </thead>
                
                  {isLoading ? (
                    <>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    <td className="w-400 flex justify-center my-20 ">
                      <BeatLoader
                        color="green"
                        // loading={isLoading}
                        css={override}
                      />
                      </td>
                    </tr>
                    </>
                  ) : (
                    <>
                    <tbody class="bg-white divide-y divide-gray-200">
                      {patients?.map((el, index) => {
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
                              <div class="text-sm text-gray-500">{el.age}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-500">
                                {el.gender}
                              </div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-500">
                                {el.address}
                              </div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-500">
                                {el.email}
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                      </tbody>
                      
                    </>
                    
                  )}
                
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
