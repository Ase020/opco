import { useEffect, useState } from "react";

import {
  AddPSPCybersecurityModal,
  PSPCybersecurityHeader,
  PSPCybersecurityRow,
} from "../../components";
import apiRequest from "../../lib/apiRequest";

const PSPCybersecurity = () => {
  const [cybersecurityIncidents, setCybersecurityIncidents] = useState([]);

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
        "/psp-cybersecurity-incident-record"
      );
      setCybersecurityIncidents(trustAccountsData.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">
          PSP Cybersecurity Incident Record{" "}
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <PSPCybersecurityHeader />

            <tbody>
              {cybersecurityIncidents &&
                cybersecurityIncidents.map((trustAcc) => (
                  <PSPCybersecurityRow
                    key={trustAcc.rowId}
                    trustAcc={trustAcc}
                    onRecordAdded={fetchTrustAccountsData}
                  />
                ))}
            </tbody>
          </table>
        </div>

        <div className="">
          <button
            onClick={openModal}
            type="button"
            className="border px-5 py-1 w-fit ml-8 rounded-md transition-all hover:bg-gray-400 hover:text-white duration-300"
          >
            Add
          </button>

          <button
            onClick={() => {}}
            type="button"
            className="border px-5 py-1 w-fit ml-8 rounded-md transition-all hover:bg-gray-400 hover:text-white duration-300"
          >
            Bulk Add
          </button>
        </div>
      </div>

      <AddPSPCybersecurityModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onRecordAdded={fetchTrustAccountsData}
      />
    </div>
  );
};

export default PSPCybersecurity;
