import { trustAccPlacement } from ".";

const TrustAccountPlacement = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 border border-red-500 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">Trust Account Placement</h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <thead className="">
              <tr className="text-white">
                <th className="border p-4 bg-[#04AA6D]">ROW_ID</th>
                <th className="border p-4 bg-[#04AA6D]">PSP_ID</th>
                <th className="border p-4 bg-[#04AA6D]">REPORTING_DATE</th>
                <th className="border p-4 bg-[#04AA6D]">
                  TRUST_FUND_PLACEMENT
                </th>
                <th className="border p-4 bg-[#04AA6D]">
                  TRUST_FUND_INV_MATURITY_DATE
                </th>
                <th className="border p-4 bg-[#04AA6D]">
                  CAT_TRUST_FUND_INVESTED_AMT
                </th>
                <th className="border p-4 bg-[#04AA6D]">
                  INTEREST_AMOUNT_PER_CATEGORY
                </th>

                <th className="border p-4 bg-[#04AA6D]">EDIT</th>
                <th className="border p-4 bg-[#04AA6D]">DELETE</th>
              </tr>
            </thead>

            <tbody>
              {trustAccPlacement.map((row) => (
                <tr
                  key={row.ROW_ID}
                  className="even:bg-[#f2f2f2] hover:bg-[#ddd]"
                >
                  <td className="border py-2 px-1">{row.ROW_ID}</td>
                  <td className="border py-2 px-1">{row.PSP_ID}</td>
                  <td className="border py-2 px-1">{row.REPORTING_DATE}</td>
                  <td className="border py-2 px-1">
                    {row.TRUST_FUND_PLACEMENT}
                  </td>
                  <td className="border py-2 px-1">
                    {row.TRUST_FUND_INV_MATURITY_DATE}
                  </td>
                  <td className="border py-2 px-1">
                    {row.CAT_TRUST_FUND_INVESTED_AMT}
                  </td>
                  <td className="border py-2 px-1">
                    {row.INTEREST_AMOUNT_PER_CATEGORY}
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

export default TrustAccountPlacement;
