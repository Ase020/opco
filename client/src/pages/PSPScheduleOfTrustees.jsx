import { useState } from "react";
import { scheduleOfTrustees } from ".";
import { AddScheduleOfTrusteesModal } from "../components";

const PSPScheduleOfTrustees = () => {
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">PSP Schedule of Trustees </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <thead className="">
              <tr className="text-white">
                <th className="border p-4 bg-[#04AA6D]">ROW_ID</th>
                <th className="border p-4 bg-[#04AA6D]">PSP_ID</th>
                <th className="border p-4 bg-[#04AA6D]">REPORTING_DATE</th>
                <th className="border p-4 bg-[#04AA6D]">TRUST_CO_NAME</th>
                <th className="border p-4 bg-[#04AA6D]">
                  DIRECTOR_OF_TRUST_CO
                </th>
                <th className="border p-4 bg-[#04AA6D]">TRUSTEE</th>
                <th className="border p-4 bg-[#04AA6D]">TRUSTEE_GENDER</th>
                <th className="border p-4 bg-[#04AA6D]">DOB</th>
                <th className="border p-4 bg-[#04AA6D]">NATIONALITY</th>
                <th className="border p-4 bg-[#04AA6D]">
                  COUNTRY_OF_RESIDENCE
                </th>
                <th className="border p-4 bg-[#04AA6D]">ID/P</th>
                <th className="border p-4 bg-[#04AA6D]">PIN</th>
                <th className="border p-4 bg-[#04AA6D]">CONTACT</th>
                <th className="border p-4 bg-[#04AA6D]">
                  ACADEMIC/PROFESSIONAL QUALIFICATIONS
                </th>
                <th className="border p-4 bg-[#04AA6D]">OTHER_TRUSTEESHIPS</th>
                <th className="border p-4 bg-[#04AA6D]">
                  DISCLOSURE_&_TRANSPARENCY_DETAILS
                </th>
                <th className="border p-4 bg-[#04AA6D]">SHAREHOLDER</th>
                <th className="border p-4 bg-[#04AA6D]">PERCENTAGE_OF_SHARE</th>

                <th className="border p-4 bg-[#04AA6D]">EDIT</th>
                <th className="border p-4 bg-[#04AA6D]">DELETE</th>
              </tr>
            </thead>

            <tbody>
              {scheduleOfTrustees.map((row) => (
                <tr
                  key={row.ROW_ID}
                  className="even:bg-[#f2f2f2] hover:bg-[#ddd]"
                >
                  <td className="border py-2 px-1">{row.ROW_ID}</td>
                  <td className="border py-2 px-1">{row.PSP_ID}</td>
                  <td className="border py-2 px-1">{row.REPORTING_DATE}</td>
                  <td className="border py-2 px-1">{row.TRUST_CO_NAME}</td>
                  <td className="border py-2 px-1">
                    {row.DIRECTOR_OF_TRUST_CO}
                  </td>
                  <td className="border py-2 px-1">{row.TRUSTEE}</td>
                  <td className="border py-2 px-1">{row.TRUSTEE_GENDER}</td>
                  <td className="border py-2 px-1">{row.DOB}</td>
                  <td className="border py-2 px-1">{row.NATIONALITY}</td>
                  <td className="border py-2">{row.COUNTRY_OF_RESIDENCE}</td>
                  <td className="border py-2">{row.ID}</td>
                  <td className="border py-2">{row.PIN}</td>
                  <td className="border py-2">{row.CONTACT}</td>
                  <td className="border py-2">{row.ACADEMIC}</td>
                  <td className="border py-2">{row.OTHER_TRUSTEESHIPS}</td>
                  <td className="border py-2">{row.DISCLOSURE}</td>
                  <td className="border py-2">{row.SHAREHOLDER}</td>
                  <td className="border py-2">{row.PERCENTAGE_OF_SHARE}</td>

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

      <AddScheduleOfTrusteesModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default PSPScheduleOfTrustees;
