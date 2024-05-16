import { useEffect, useState } from "react";
import {
  AddTrustAccDetailsModal,
  DirectorMgtHeader,
  TrustAccDetailsRow,
} from "../../components";
import apiRequest from "../../lib/apiRequest";

const DirectorMgt = () => {
  const [directorMgts, setDirectorMgts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    fetchDirectorMgtsData();
  }, []);

  const fetchDirectorMgtsData = async () => {
    try {
      const directorMgtsData = await apiRequest.get("/trust-accounts");
      setDirectorMgts(directorMgtsData.data);
    } catch (error) {
      console.log("Error: ", error.response.data.message);
    }
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">
          Particulars Of Directors/Management Information
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <DirectorMgtHeader />

            <tbody>
              {directorMgts &&
                directorMgts.map((trustAcc) => (
                  <TrustAccDetailsRow
                    key={trustAcc.rowId}
                    trustAcc={trustAcc}
                    onRecordAdded={fetchDirectorMgtsData}
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

      <AddTrustAccDetailsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onRecordAdded={fetchDirectorMgtsData}
      />
    </div>
  );
};

export default DirectorMgt;
