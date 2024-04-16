import { trustAccDetails } from ".";

const TrustAccountDetails = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 border border-red-500 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">Trust Account Details</h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <thead className="">
              <tr className="text-white">
                <th className="border p-4 bg-[#04AA6D]">ROW_ID</th>
                <th className="border p-4 bg-[#04AA6D]">PSP_ID</th>
                <th className="border p-4 bg-[#04AA6D]">BANK_ID</th>
                <th className="border p-4 bg-[#04AA6D]">REPORTING_DATE</th>
                <th className="border p-4 bg-[#04AA6D]">BANK_ACCOUNT_NUMBER</th>
                <th className="border p-4 bg-[#04AA6D]">
                  TRUST_ACC_DR_TYPE_CODE
                </th>
                <th className="border p-4 bg-[#04AA6D]">
                  ORG_RECEIVING_DONATION
                </th>
                <th className="border p-4 bg-[#04AA6D]">SECTOR_CODE</th>
                <th className="border p-4 bg-[#04AA6D]">
                  TRUST_ACC_INT_UTILIZED_DETAILS
                </th>
                <th className="border p-4 bg-[#04AA6D]">
                  TRUST_ACC_OPENING_BALANCE
                </th>
                <th className="border p-4 bg-[#04AA6D]">PRINCIPAL_AMOUNT</th>
                <th className="border p-4 bg-[#04AA6D]">
                  TRUST_ACC_INTEREST_EARNED
                </th>
                <th className="border p-4 bg-[#04AA6D]">CLOSING_BALANCE</th>
                <th className="border p-4 bg-[#04AA6D]">
                  TRUST_ACC_INTEREST_UTILIZED
                </th>
                <th className="border p-4 bg-[#04AA6D]">EDIT</th>
                <th className="border p-4 bg-[#04AA6D]">DELETE</th>
              </tr>
            </thead>

            <tbody>
              {trustAccDetails.map((row) => (
                <tr
                  key={row.ROW_ID}
                  className="even:bg-[#f2f2f2] hover:bg-[#ddd]"
                >
                  <td className="border py-2 px-1">{row.ROW_ID}</td>
                  <td className="border py-2 px-1">{row.PSP_ID}</td>
                  <td className="border py-2 px-1">{row.BANK_ID}</td>
                  <td className="border py-2 px-1">{row.REPORTING_DATE}</td>
                  <td className="border py-2 px-1">
                    {row.BANK_ACCOUNT_NUMBER}
                  </td>
                  <td className="border py-2 px-1">
                    {row.TRUST_ACC_DR_TYPE_CODE}
                  </td>
                  <td className="border py-2 px-1">
                    {row.ORG_RECEIVING_DONATION}
                  </td>
                  <td className="border py-2 px-1">{row.SECTOR_CODE}</td>
                  <td className="border py-2 px-1">
                    {row.TRUST_ACC_INT_UTILIZED_DETAILS}
                  </td>
                  <td className="border py-2">
                    {row.TRUST_ACC_OPENING_BALANCE}
                  </td>
                  <td className="border py-2">{row.PRINCIPAL_AMOUNT}</td>
                  <td className="border py-2">
                    {row.TRUST_ACC_INTEREST_EARNED}
                  </td>
                  <td className="border py-2">{row.CLOSING_BALANCE}</td>
                  <td className="border py-2">
                    {row.TRUST_ACC_INTEREST_UTILIZED}
                  </td>

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

export default TrustAccountDetails;
