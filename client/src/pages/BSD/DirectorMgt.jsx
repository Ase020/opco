import { useEffect, useState } from "react";
import {
  AddDirectorMgtModal,
  DirectorMgtHeader,
  DirectorMgtRow,
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
      const directorMgtsData = await apiRequest.get(
        "/director-management-info"
      );
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
                  <DirectorMgtRow
                    key={trustAcc.rowId}
                    trustAcc={trustAcc}
                    onRecordAdded={fetchDirectorMgtsData}
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

      <AddDirectorMgtModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onRecordAdded={fetchDirectorMgtsData}
      />
    </div>
  );
};

export default DirectorMgt;
