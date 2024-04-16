import { scheduleOfDirectors } from ".";

const PSPScheduleOfDirectors = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 border border-red-500 overflow-hidden">
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
                <th className="border p-4 bg-[#04AA6D]">DIRECTOR_NAME</th>
                <th className="border p-4 bg-[#04AA6D]">DIRECTOR_GENDER</th>
                <th className="border p-4 bg-[#04AA6D]">DIRECTOR_TYPE</th>
                <th className="border p-4 bg-[#04AA6D]">DOB</th>
                <th className="border p-4 bg-[#04AA6D]">
                  NATIONALITY_OF_DIRECTOR
                </th>
                <th className="border p-4 bg-[#04AA6D]">
                  COUNTRY_OF_RESIDENCE
                </th>
                <th className="border p-4 bg-[#04AA6D]">ID/P</th>
                <th className="border p-4 bg-[#04AA6D]">PIN</th>
                <th className="border p-4 bg-[#04AA6D]">CONTACT</th>
                <th className="border p-4 bg-[#04AA6D]">
                  ACADEMIC/PROFESSIONAL QUALIFICATIONS
                </th>
                <th className="border p-4 bg-[#04AA6D]">OTHER_DIRECTORSHIPS</th>
                <th className="border p-4 bg-[#04AA6D]">DATE_OF_APPOINTMENT</th>
                <th className="border p-4 bg-[#04AA6D]">DATE_OF_RETIREMENT</th>
                <th className="border p-4 bg-[#04AA6D]">
                  REASON_FOR_RETIREMENT/RESIGNATION
                </th>
                <th className="border p-4 bg-[#04AA6D]">
                  DISCLOSURE_&_TRANSPARENCY_DETAILS
                </th>

                <th className="border p-4 bg-[#04AA6D]">EDIT</th>
                <th className="border p-4 bg-[#04AA6D]">DELETE</th>
              </tr>
            </thead>

            <tbody>
              {scheduleOfDirectors.map((row) => (
                <tr
                  key={row.ROW_ID}
                  className="even:bg-[#f2f2f2] hover:bg-[#ddd]"
                >
                  <td className="border py-2 px-1">{row.ROW_ID}</td>
                  <td className="border py-2 px-1">{row.PSP_ID}</td>
                  <td className="border py-2 px-1">{row.REPORTING_DATE}</td>
                  <td className="border py-2 px-1">{row.DIRECTOR_NAME}</td>
                  <td className="border py-2 px-1">{row.DIRECTOR_GENDER}</td>
                  <td className="border py-2 px-1">{row.DIRECTOR_TYPE}</td>
                  <td className="border py-2 px-1">{row.DOB}</td>
                  <td className="border py-2 px-1">
                    {row.NATIONALITY_OF_DIRECTOR}
                  </td>
                  <td className="border py-2 px-1">
                    {row.COUNTRY_OF_RESIDENCE}
                  </td>
                  <td className="border py-2">{row.ID}</td>
                  <td className="border py-2">{row.PIN}</td>
                  <td className="border py-2">{row.CONTACT}</td>
                  <td className="border py-2">{row.ACADEMIC_QUALIFICATIONS}</td>
                  <td className="border py-2">{row.OTHER_DIRECTORSHIPS}</td>
                  <td className="border py-2">{row.DATE_OF_APPOINTMENT}</td>
                  <td className="border py-2">{row.DATE_OF_RETIREMENT}</td>
                  <td className="border py-2">{row.REASON_FOR_RETIREMENT}</td>
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
      </div>
    </div>
  );
};

export default PSPScheduleOfDirectors;
