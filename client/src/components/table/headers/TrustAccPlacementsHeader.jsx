const TrustAccPlacementsHeader = () => {
  return (
    <tr className="text-white">
      {/* <th className="border p-4 bg-[#04AA6D]">ROW_ID</th> */}
      <th className="border p-4 bg-[#04AA6D]">PSP_ID</th>
      <th className="border p-4 bg-[#04AA6D]">REPORTING_DATE</th>
      <th className="border p-4 bg-[#04AA6D]">TRUST_FUND_PLACEMENT</th>
      <th className="border p-4 bg-[#04AA6D]">TRUST_FUND_INV_MATURITY_DATE</th>
      <th className="border p-4 bg-[#04AA6D]">CAT_TRUST_FUND_INVESTED_AMT</th>
      <th className="border p-4 bg-[#04AA6D]">INTEREST_AMOUNT_PER_CATEGORY</th>

      <th className="border p-4 bg-[#04AA6D]">EDIT</th>
      <th className="border p-4 bg-[#04AA6D]">DELETE</th>
    </tr>
  );
};

export default TrustAccPlacementsHeader;
