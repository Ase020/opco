const TrustAccDetailsHeader = () => {
  return (
    <thead className="">
      <tr className="text-white">
        {/* <th className="border p-4 bg-[#04AA6D]">ROW_ID</th> */}
        <th className="border p-4 bg-[#04AA6D]">PSP_ID</th>
        <th className="border p-4 bg-[#04AA6D]">BANK_ID</th>
        <th className="border p-4 bg-[#04AA6D]">REPORTING_DATE</th>
        <th className="border p-4 bg-[#04AA6D]">BANK_ACCOUNT_NUMBER</th>
        <th className="border p-4 bg-[#04AA6D]">TRUST_ACC_DR_TYPE_CODE</th>
        <th className="border p-4 bg-[#04AA6D]">ORG_RECEIVING_DONATION</th>
        <th className="border p-4 bg-[#04AA6D]">SECTOR_CODE</th>
        <th className="border p-4 bg-[#04AA6D]">
          TRUST_ACC_INT_UTILIZED_DETAILS
        </th>
        <th className="border p-4 bg-[#04AA6D]">TRUST_ACC_OPENING_BALANCE</th>
        <th className="border p-4 bg-[#04AA6D]">PRINCIPAL_AMOUNT</th>
        <th className="border p-4 bg-[#04AA6D]">TRUST_ACC_INTEREST_EARNED</th>
        <th className="border p-4 bg-[#04AA6D]">CLOSING_BALANCE</th>
        <th className="border p-4 bg-[#04AA6D]">TRUST_ACC_INTEREST_UTILIZED</th>
        <th className="border p-4 bg-[#04AA6D]">EDIT</th>
        <th className="border p-4 bg-[#04AA6D]">DELETE</th>
      </tr>
    </thead>
  );
};

export default TrustAccDetailsHeader;
