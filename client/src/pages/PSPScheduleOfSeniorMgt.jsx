import { useState } from "react";
import { scheduleOfSeniorMgt } from ".";
import {
  AddScheduleOfSeniorMgtModal,
  PSPScheduleOfSeniorMgtHeader,
} from "../components";

const PSPScheduleOfSeniorMgt = () => {
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">
          PSP Schedule of Senior Management{" "}
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <PSPScheduleOfSeniorMgtHeader />

            <tbody>
              {scheduleOfSeniorMgt.map((row) => (
                <tr
                  key={row.ROW_ID}
                  className="even:bg-[#f2f2f2] hover:bg-[#ddd]"
                >
                  <td className="border py-2 px-1">{row.ROW_ID}</td>
                  <td className="border py-2 px-1">{row.PSP_ID}</td>
                  <td className="border py-2 px-1">{row.REPORTING_DATE}</td>
                  <td className="border py-2 px-1">{row.OFFICER_NAME}</td>
                  <td className="border py-2 px-1">{row.GENDER}</td>
                  <td className="border py-2 px-1">{row.DESIGNATION}</td>
                  <td className="border py-2 px-1">{row.DOB}</td>
                  <td className="border py-2 px-1">{row.NATIONALITY}</td>
                  <td className="border py-2">{row.ID}</td>
                  <td className="border py-2">{row.PIN}</td>
                  <td className="border py-2">{row.ACADEMIC_QUALIFICATIONS}</td>
                  <td className="border py-2">{row.DATE_OF_EMPLOYMENT}</td>
                  <td className="border py-2">{row.EMPLOYMENT_TYPE}</td>
                  <td className="border py-2">
                    {row.EXPECTED_DATE_OF_RETIREMENT}
                  </td>
                  <td className="border py-2">{row.OTHER_AFFILIATIONS}</td>
                  <td className="border py-2">{row.DISCLOSURE_DETAILS}</td>

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

      <AddScheduleOfSeniorMgtModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default PSPScheduleOfSeniorMgt;
