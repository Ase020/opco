import { useState } from "react";
import DeleteModal from "../../modals/delete/DeleteModal";
import EditMobilePSPModal from "../../modals/edit/EditMobilePSPModal";

/* eslint-disable react/prop-types */
const MobilePSPRow = ({ trustAcc, onRecordAdded }) => {
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
      <td className="border py-2 px-4">{trustAcc.reportingDate}</td>
      <td className="border py-2 px-4">{trustAcc.subCountyCode}</td>
      <td className="border py-2 px-4">{trustAcc.agentId}</td>
      <td className="border py-2 px-4">{trustAcc.denominationCode}</td>
      <td className="border py-2 px-4">{trustAcc.serialNumber}</td>
      <td className="border py-2 px-4 text-nowrap">
        {trustAcc.depositorsName}
      </td>
      <td className="border py-2 px-4 text-nowrap">{trustAcc.tellersName}</td>
      <td className="border py-2 px-4">{trustAcc.dateConfiscated}</td>
      <td className="border py-2 px-4">{trustAcc.dateSubmittedToCBK}</td>
      <td className="border py-2 px-4">{trustAcc.remarks}</td>
      <td className="border py-2 px-4">{trustAcc.numberOfPieces}</td>

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
        <EditMobilePSPModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          trustAcc={trustAcc}
          onRecordAdded={onRecordAdded}
        />

        <DeleteModal
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          endPoint={`/mobile-psp-counterfeit-currency-frauds/${trustAcc.rowId}`}
          onRecordAdded={onRecordAdded}
        />
      </td>
    </tr>
  );
};

export default MobilePSPRow;
