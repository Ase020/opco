const PSPIncidentFraudHeader = () => {
  return (
    <thead className="">
      <tr className="text-white">
        {/* <th className="border p-4 bg-[#04AA6D]">ROW_ID</th> */}
        <th className="border p-4 bg-[#04AA6D]">PSP_ID</th>
        <th className="border p-4 bg-[#04AA6D]">REPORTING_DATE</th>
        <th className="border p-4 bg-[#04AA6D]">SUB_COUNTY_CODE</th>
        <th className="border p-4 bg-[#04AA6D]">SUB_FRAUD_CODE</th>
        <th className="border p-4 bg-[#04AA6D]">FRAUD_CATEGORY_FLAG</th>
        <th className="border p-4 bg-[#04AA6D]">VICTIM_CATEGORY</th>
        <th className="border p-4 bg-[#04AA6D]">VICTIM_INFORMATION</th>
        <th className="border p-4 bg-[#04AA6D]">DATE_OF_OCCURRENCE</th>
        <th className="border p-4 bg-[#04AA6D]">NUMBER_OF_INCIDENCES</th>
        <th className="border p-4 bg-[#04AA6D]">AMOUNT_INVOLVED</th>
        <th className="border p-4 bg-[#04AA6D]">AMOUNT_LOST</th>
        <th className="border p-4 bg-[#04AA6D]">AMOUNT_RECOVERED</th>
        <th className="border p-4 bg-[#04AA6D]">ACTION_TAKEN</th>
        <th className="border p-4 bg-[#04AA6D]">RECOVERY_DETAILS</th>

        <th className="border p-4 bg-[#04AA6D]">EDIT</th>
        <th className="border p-4 bg-[#04AA6D]">DELETE</th>
      </tr>
    </thead>
  );
};

export default PSPIncidentFraudHeader;
