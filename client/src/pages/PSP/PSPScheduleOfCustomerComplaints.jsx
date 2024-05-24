import { useEffect, useState } from "react";

import {
  AddScheduleOfCustomerComplaintsModal,
  PSPScheduleOfCustomerComplaintsHeader,
  PSPScheduleOfCustomerComplaintsRow,
} from "../../components";
import apiRequest from "../../lib/apiRequest";

function PSPScheduleOfCustomerComplaints() {
  const [customerComplaints, setCustomerComplaints] = useState([]);

  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    fetchsetCustomerComplaintsData();
  }, []);

  const fetchsetCustomerComplaintsData = async () => {
    try {
      const setCustomerComplaintsData = await apiRequest.get(
        "/psp-schedule-of-customer-complaints-&-remedial-actions"
      );
      setCustomerComplaints(setCustomerComplaintsData.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">
          PSP Schedule of Customer Complaints & Remedial Actions
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <PSPScheduleOfCustomerComplaintsHeader />

            <tbody>
              {customerComplaints &&
                customerComplaints.map((trustAcc) => (
                  <PSPScheduleOfCustomerComplaintsRow
                    key={trustAcc.rowId}
                    trustAcc={trustAcc}
                    onRecordAdded={fetchsetCustomerComplaintsData}
                  />
                ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={openModal}
          type="button"
          className="border px-5 py-1 w-fit ml-8 rounded-md transition-all hover:bg-gray-400 hover:text-white duration-300"
        >
          Add
        </button>
      </div>

      <AddScheduleOfCustomerComplaintsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onRecordAdded={fetchsetCustomerComplaintsData}
      />
    </div>
  );
}

export default PSPScheduleOfCustomerComplaints;
