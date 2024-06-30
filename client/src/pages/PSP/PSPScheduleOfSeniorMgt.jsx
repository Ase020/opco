import { useEffect, useState } from "react";
import {
  AddScheduleOfSeniorMgtModal,
  PSPScheduleOfSeniorMgtHeader,
  PSPScheduleOfSeniorMgtRow,
} from "../../components";
import apiRequest from "../../lib/apiRequest";

const PSPScheduleOfSeniorMgt = () => {
  const [seniorMgts, setSeniorMgts] = useState([]);
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
        "/psp-schedule-of-senior-management"
      );
      setSeniorMgts(trustAccountsData.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">
          PSP Schedule of Senior Management{" "}
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <PSPScheduleOfSeniorMgtHeader />

            <tbody>
              {seniorMgts &&
                seniorMgts.map((trustAcc) => (
                  <PSPScheduleOfSeniorMgtRow
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

      <AddScheduleOfSeniorMgtModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onRecordAdded={fetchTrustAccountsData}
      />
    </div>
  );
};

export default PSPScheduleOfSeniorMgt;
