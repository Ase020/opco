import { useState } from "react";
import { scheduleOfShareholders } from ".";
import { AddScheduleOfShareholdersModal } from "../components";

const PSPScheduleOfShareholders = () => {
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">PSP Schedule of Shareholders </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <thead className="">
              <tr className="text-white">
                <th className="border p-4 bg-[#04AA6D]">ROW_ID</th>
                <th className="border p-4 bg-[#04AA6D]">PSP_ID</th>
                <th className="border p-4 bg-[#04AA6D]">REPORTING_DATE</th>
                <th className="border p-4 bg-[#04AA6D]">SHAREHOLDER_NAME</th>
                <th className="border p-4 bg-[#04AA6D]">SHAREHOLDER_GENDER</th>
                <th className="border p-4 bg-[#04AA6D]">SHAREHOLDER_TYPE</th>
                <th className="border p-4 bg-[#04AA6D]">DOB/REG DATE</th>
                <th className="border p-4 bg-[#04AA6D]">
                  NATIONALITY_OF_SHAREHOLDER
                </th>
                <th className="border p-4 bg-[#04AA6D]">
                  COUNTRY_OF_RESIDENCE
                </th>
                <th className="border p-4 bg-[#04AA6D]">
                  COUNTRY_OF_INCORPORATION
                </th>
                <th className="border p-4 bg-[#04AA6D]">ID/P</th>
                <th className="border p-4 bg-[#04AA6D]">PIN</th>
                <th className="border p-4 bg-[#04AA6D]">CONTACT</th>
                <th className="border p-4 bg-[#04AA6D]">
                  ACADEMIC/PROFESSIONAL QUALIFICATIONS
                </th>
                <th className="border p-4 bg-[#04AA6D]">
                  DETAILS_OF_PREVIOUS_EMPLOYMENT
                </th>
                <th className="border p-4 bg-[#04AA6D]">
                  DATE_ONE_BECAME_SHAREHOLDER
                </th>
                <th className="border p-4 bg-[#04AA6D]">
                  NUMBERS_OF_SHARES_HELD
                </th>
                <th className="border p-4 bg-[#04AA6D]">SHARE_VALUE</th>
                <th className="border p-4 bg-[#04AA6D]">PERCENTAGE_OF_SHARE</th>

                <th className="border p-4 bg-[#04AA6D]">EDIT</th>
                <th className="border p-4 bg-[#04AA6D]">DELETE</th>
              </tr>
            </thead>

            <tbody>
              {scheduleOfShareholders.map((row) => (
                <tr
                  key={row.ROW_ID}
                  className="even:bg-[#f2f2f2] hover:bg-[#ddd]"
                >
                  <td className="border py-2 px-1">{row.ROW_ID}</td>
                  <td className="border py-2 px-1">{row.PSP_ID}</td>
                  <td className="border py-2 px-1">{row.REPORTING_DATE}</td>
                  <td className="border py-2 px-1">{row.SHAREHOLDER_NAME}</td>
                  <td className="border py-2 px-1">{row.SHAREHOLDER_GENDER}</td>
                  <td className="border py-2 px-1">{row.SHAREHOLDER_TYPE}</td>
                  <td className="border py-2 px-1">{row.DOB}</td>
                  <td className="border py-2 px-1">
                    {row.NATIONALITY_OF_SHAREHOLDER}
                  </td>
                  <td className="border py-2 px-1">
                    {row.COUNTRY_OF_RESIDENCE}
                  </td>
                  <td className="border py-2">
                    {row.COUNTRY_OF_INCORPORATION}
                  </td>
                  <td className="border py-2">{row.ID}</td>
                  <td className="border py-2">{row.PIN}</td>
                  <td className="border py-2">{row.CONTACT}</td>
                  <td className="border py-2">{row.ACADEMIC}</td>
                  <td className="border py-2">
                    {row.DETAILS_OF_PREVIOUS_EMPLOYMENT}
                  </td>
                  <td className="border py-2">
                    {row.DATE_ONE_BECAME_SHAREHOLDER}
                  </td>
                  <td className="border py-2">{row.NUMBERS_OF_SHARES_HELD}</td>
                  <td className="border py-2">{row.SHARE_VALUE}</td>
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

      <AddScheduleOfShareholdersModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default PSPScheduleOfShareholders;
