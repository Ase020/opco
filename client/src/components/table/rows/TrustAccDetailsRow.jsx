import { useState } from "react";
import EditTrustAccDetailsModal from "../../modals/edit/EditTrustAccDetailsModal";
import DeleteModal from "../../modals/delete/DeleteModal";

/* eslint-disable react/prop-types */
const TrustAccDetailsRow = ({ trustAcc }) => {
  let [isOpen, setIsOpen] = useState(false);
  let [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function openDeleteModalModal() {
    setIsDeleteModalOpen(true);
  }

  return (
    <tr className="even:bg-[#f2f2f2] hover:bg-[#ddd]">
      {/* <td className="border py-2 px-4">{trustAcc.rowId}</td> */}
      <td className="border py-2 px-4">{trustAcc.pspId}</td>
      <td className="border py-2 px-4">{trustAcc.bankId}</td>
      <td className="border py-2 px-4">{trustAcc.reportingDate}</td>
      <td className="border py-2 px-4">{trustAcc.bankAccNumber}</td>
      <td className="border py-2 px-4">{trustAcc.trustAccDrTypeCode}</td>
      <td className="border py-2 px-4">{trustAcc.orgReceivingDonation}</td>
      <td className="border py-2 px-4">{trustAcc.sectorCode}</td>
      <td className="border py-2 px-4">
        {trustAcc.trustAccIntUtilizedDetails}
      </td>
      <td className="border py-2 px-4">{trustAcc.openingBal}</td>
      <td className="border py-2 px-4">{trustAcc.principalAmount}</td>
      <td className="border py-2 px-4">{trustAcc.interestEarned}</td>
      <td className="border py-2 px-4">{trustAcc.closingBal}</td>
      <td className="border py-2 px-4">{trustAcc.trustAccInterestUtilized}</td>

      <td className="border py-2 text-center">
        <button
          type="button"
          className="bg-gray-400 border-none px-2.5 rounded text-white"
          onClick={openModal}
        >
          Edit
        </button>
      </td>

      <td className="border py-2 text-center">
        <button
          type="button"
          className="bg-red-400 border-none px-2.5 rounded text-white"
          onClick={openDeleteModalModal}
        >
          Delete
        </button>
        <EditTrustAccDetailsModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          trustAcc={trustAcc}
        />

        <DeleteModal
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          trustAcc={trustAcc}
        />
      </td>
    </tr>
  );
};

export default TrustAccDetailsRow;
