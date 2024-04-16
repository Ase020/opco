import { mobilePSP } from ".";

const MobilePSP = () => {
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
                <th className="border p-4 bg-[#04AA6D]">SUB_COUNTY_CODE</th>
                <th className="border p-4 bg-[#04AA6D]">AGENT_ID</th>
                <th className="border p-4 bg-[#04AA6D]">DENOMINATION_CODE</th>
                <th className="border p-4 bg-[#04AA6D]">SERIAL_NO</th>
                <th className="border p-4 bg-[#04AA6D]">DEPOSITOR</th>
                <th className="border p-4 bg-[#04AA6D]">TELLER</th>
                <th className="border p-4 bg-[#04AA6D]">DATE_CONFISCATED</th>
                <th className="border p-4 bg-[#04AA6D]">DATE_SUBMITTED</th>
                <th className="border p-4 bg-[#04AA6D]">REMARKS</th>
                <th className="border p-4 bg-[#04AA6D]">PIECES</th>

                <th className="border p-4 bg-[#04AA6D]">EDIT</th>
                <th className="border p-4 bg-[#04AA6D]">DELETE</th>
              </tr>
            </thead>

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
      </div>
    </div>
  );
};

export default MobilePSP;
