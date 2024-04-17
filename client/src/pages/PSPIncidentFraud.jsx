import { useState } from "react";
import { pSPIncidents } from ".";
import { AddPSPIncidentFraudModal } from "../components";

const PSPIncidentFraud = () => {
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">
          PSP Incidents of fraud theft robbery
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <thead className="">
              <tr className="text-white">
                <th className="border p-4 bg-[#04AA6D]">ROW_ID</th>
                <th className="border p-4 bg-[#04AA6D]">PSP_ID</th>
                <th className="border p-4 bg-[#04AA6D]">REPORTING_DATE</th>
                <th className="border p-4 bg-[#04AA6D]">SUB_COUNTY_CODE</th>
                <th className="border p-4 bg-[#04AA6D]">SUB_FRAUD_CODE</th>
                <th className="border p-4 bg-[#04AA6D]">FRAUD_CATEGORY_FLAG</th>
                <th className="border p-4 bg-[#04AA6D]">VICTIM_CATEGORY</th>
                <th className="border p-4 bg-[#04AA6D]">VICTIM_INFORMATION</th>
                <th className="border p-4 bg-[#04AA6D]">DATE_OF_OCCURRENCE</th>
                <th className="border p-4 bg-[#04AA6D]">
                  NUMBER_OF_INCIDENCES
                </th>
                <th className="border p-4 bg-[#04AA6D]">AMOUNT_INVOLVED</th>
                <th className="border p-4 bg-[#04AA6D]">AMOUNT_LOST</th>
                <th className="border p-4 bg-[#04AA6D]">AMOUNT_RECOVERED</th>
                <th className="border p-4 bg-[#04AA6D]">ACTION_TAKEN</th>
                <th className="border p-4 bg-[#04AA6D]">RECOVERY_DETAILS</th>

                <th className="border p-4 bg-[#04AA6D]">EDIT</th>
                <th className="border p-4 bg-[#04AA6D]">DELETE</th>
              </tr>
            </thead>

            <tbody>
              {pSPIncidents.map((row) => (
                <tr
                  key={row.ROW_ID}
                  className="even:bg-[#f2f2f2] hover:bg-[#ddd]"
                >
                  <td className="border py-2 px-1">{row.ROW_ID}</td>
                  <td className="border py-2 px-1">{row.PSP_ID}</td>
                  <td className="border py-2 px-1">{row.REPORTING_DATE}</td>
                  <td className="border py-2 px-1">{row.SUB_COUNTY_CODE}</td>
                  <td className="border py-2 px-1">{row.SUB_FRAUD_CODE}</td>
                  <td className="border py-2 px-1">
                    {row.FRAUD_CATEGORY_FLAG}
                  </td>
                  <td className="border py-2 px-1">{row.VICTIM_CATEGORY}</td>
                  <td className="border py-2 px-1">{row.VICTIM_INFORMATION}</td>
                  <td className="border py-2 px-1">{row.DATE_OF_OCCURRENCE}</td>
                  <td className="border py-2">{row.NUMBER_OF_INCIDENCES}</td>
                  <td className="border py-2">{row.AMOUNT_INVOLVED}</td>
                  <td className="border py-2">{row.AMOUNT_LOST}</td>
                  <td className="border py-2">{row.AMOUNT_RECOVERED}</td>
                  <td className="border py-2">{row.ACTION_TAKEN}</td>
                  <td className="border py-2">{row.RECOVERY_DETAILS}</td>

                  <td className="border py-2 text-center">
                    <button
                      type="button"
                      className="bg-gray-400 border-none px-2.5 rounded text-white"
                    >
                      Edit
                    </button>
                  </td>

                  <td className="border py-2 text-center">
                    <button
                      type="button"
                      className="bg-red-400 border-none px-2.5 rounded text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={openModal}
          type="button"
          className="border px-5 py-1 w-fit ml-8 rounded-md transition-all hover:bg-gray-400 hover:text-white duration-300"
        >
          Add
        </button>
      </div>

      <AddPSPIncidentFraudModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default PSPIncidentFraud;
