const PSPCybersecurityHeader = () => {
  return (
    <thead className="">
      <tr className="text-white">
        {/* <th className="border p-4 bg-[#04AA6D]">ROW_ID</th> */}
        <th className="border p-4 bg-[#04AA6D]">PSP_ID</th>
        <th className="border p-4 bg-[#04AA6D]">REPORTING_DATE</th>
        <th className="border p-4 bg-[#04AA6D]">INCIDENT_NUMBER</th>
        <th className="border p-4 bg-[#04AA6D]">LOCATION_OF_ATTACKER</th>
        <th className="border p-4 bg-[#04AA6D]">INCIDENT_MODE</th>
        <th className="border p-4 bg-[#04AA6D]">
          DATETIME_OF_INCIDENT_HAPPENNED
        </th>
        <th className="border p-4 bg-[#04AA6D]">LOSS_TYPE</th>
        <th className="border p-4 bg-[#04AA6D]">DETAILS_OF_THE_INCIDENT</th>
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
  );
};

export default PSPCybersecurityHeader;
