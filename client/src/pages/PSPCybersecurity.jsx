import { pSPCyberSecurity } from ".";

const PSPCybersecurity = () => {
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
                <th className="border p-4 bg-[#04AA6D]">INCIDENT_NUMBER</th>
                <th className="border p-4 bg-[#04AA6D]">
                  LOCATION_OF_ATTACKER
                </th>
                <th className="border p-4 bg-[#04AA6D]">INCIDENT_MODE</th>
                <th className="border p-4 bg-[#04AA6D]">
                  DATETIME_OF_INCIDENT_HAPPENNED
                </th>
                <th className="border p-4 bg-[#04AA6D]">LOSS_TYPE</th>
                <th className="border p-4 bg-[#04AA6D]">
                  DETAILS_OF_THE_INCIDENT
                </th>
                <th className="border p-4 bg-[#04AA6D]">
                  ACTION_TAKENTO_MANAGE_INCIDENT
                </th>
                <th className="border p-4 bg-[#04AA6D]">
                  DATETIME_OF_INCIDENT_RESOLUTION
                </th>
                <th className="border p-4 bg-[#04AA6D]">
                  ACTION_TAKEN_MITIGATE_FUT_INC
                </th>
                <th className="border p-4 bg-[#04AA6D]">AMOUNT_INVOLVED</th>
                <th className="border p-4 bg-[#04AA6D]">AMOUNT_LOST</th>

                <th className="border p-4 bg-[#04AA6D]">EDIT</th>
                <th className="border p-4 bg-[#04AA6D]">DELETE</th>
              </tr>
            </thead>

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
      </div>
    </div>
  );
};

export default PSPCybersecurity;
