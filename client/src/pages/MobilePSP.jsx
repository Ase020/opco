import { useState } from "react";
import { mobilePSP } from ".";
import { AddMobilePSPModal, MobilePSPHeader } from "../components";

const MobilePSP = () => {
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">
          Mobile PSP Counterfeit Currency Frauds
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <MobilePSPHeader />

            <tbody>
              {mobilePSP.map((row) => (
                <tr
                  key={row.ROW_ID}
                  className="even:bg-[#f2f2f2] hover:bg-[#ddd]"
                >
                  <td className="border py-2 px-1">{row.ROW_ID}</td>
                  <td className="border py-2 px-1">{row.PSP_ID}</td>
                  <td className="border py-2 px-1">{row.REPORTING_DATE}</td>
                  <td className="border py-2 px-1">{row.SUB_COUNTY_CODE}</td>
                  <td className="border py-2 px-1">{row.AGENT_ID}</td>
                  <td className="border py-2 px-1">{row.DENOMINATION_CODE}</td>
                  <td className="border py-2 px-1">{row.SERIAL_NO}</td>
                  <td className="border py-2 px-1">{row.DEPOSITOR}</td>
                  <td className="border py-2 px-1">{row.TELLER}</td>
                  <td className="border py-2">{row.DATE_CONFISCATED}</td>
                  <td className="border py-2">{row.DATE_SUBMITTED}</td>
                  <td className="border py-2">{row.REMARKS}</td>
                  <td className="border py-2">{row.PIECES}</td>

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
          type="button"
          onClick={openModal}
          className="border px-5 py-1 w-fit ml-8 rounded-md transition-all hover:bg-gray-400 hover:text-white duration-300"
        >
          Add
        </button>
      </div>

      <AddMobilePSPModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default MobilePSP;
