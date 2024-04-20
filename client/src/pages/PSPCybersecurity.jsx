import { useState } from "react";
import { pSPCyberSecurity } from ".";
import {
  AddPSPCybersecurityModal,
  PSPCybersecurityHeader,
} from "../components";

const PSPCybersecurity = () => {
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">
          PSP Cybersecurity Incident Record{" "}
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <PSPCybersecurityHeader />

            <tbody>
              {pSPCyberSecurity.map((row) => (
                <tr
                  key={row.ROW_ID}
                  className="even:bg-[#f2f2f2] hover:bg-[#ddd]"
                >
                  <td className="border py-2 px-1">{row.ROW_ID}</td>
                  <td className="border py-2 px-1">{row.PSP_ID}</td>
                  <td className="border py-2 px-1">{row.REPORTING_DATE}</td>
                  <td className="border py-2 px-1">{row.INCIDENT_NUMBER}</td>
                  <td className="border py-2 px-1">
                    {row.LOCATION_OF_ATTACKER}
                  </td>
                  <td className="border py-2 px-1">{row.INCIDENT_MODE}</td>
                  <td className="border py-2 px-1">
                    {row.DATETIME_OF_INCIDENT_HAPPENNED}
                  </td>
                  <td className="border py-2 px-1">{row.LOSS_TYPE}</td>
                  <td className="border py-2 px-1">
                    {row.DETAILS_OF_THE_INCIDENT}
                  </td>
                  <td className="border py-2">
                    {row.ACTION_TAKENTO_MANAGE_INCIDENT}
                  </td>
                  <td className="border py-2">
                    {row.DATETIME_OF_INCIDENT_RESOLUTION}
                  </td>
                  <td className="border py-2">
                    {row.ACTION_TAKEN_MITIGATE_FUT_INC}
                  </td>
                  <td className="border py-2">{row.AMOUNT_INVOLVED}</td>
                  <td className="border py-2">{row.AMOUNT_LOST}</td>

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

      <AddPSPCybersecurityModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default PSPCybersecurity;
