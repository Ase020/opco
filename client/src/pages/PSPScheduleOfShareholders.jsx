import { useEffect, useState } from "react";

import {
  AddScheduleOfShareholdersModal,
  PSPScheduleOfShareholdersHeader,
  PSPScheduleOfShareholdersRow,
} from "../components";
import apiRequest from "../lib/apiRequest";

const PSPScheduleOfShareholders = () => {
  const [shareholders, setShareholders] = useState([]);
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    fetchTrustAccountsData();
  }, []);

  const fetchTrustAccountsData = async () => {
    try {
      const trustAccountsData = await apiRequest.get(
        "/psp-schedule-of-shareholders"
      );
      setShareholders(trustAccountsData.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">PSP Schedule of Shareholders </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <PSPScheduleOfShareholdersHeader />

            <tbody>
              {shareholders &&
                shareholders.map((trustAcc) => (
                  <PSPScheduleOfShareholdersRow
                    key={trustAcc.rowId}
                    trustAcc={trustAcc}
                    onRecordAdded={fetchTrustAccountsData}
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

      <AddScheduleOfShareholdersModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onRecordAdded={fetchTrustAccountsData}
      />
    </div>
  );
};

export default PSPScheduleOfShareholders;
