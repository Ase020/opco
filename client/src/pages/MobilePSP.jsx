import { Suspense, useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import {
  AddMobilePSPModal,
  MobilePSPHeader,
  MobilePSPRow,
} from "../components";

const MobilePSP = () => {
  const mobilePSPs = useLoaderData();

  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">
          Mobile PSP Counterfeit Currency Frauds
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <MobilePSPHeader />

            <tbody>
              <Suspense
                fallback={
                  <tr className="even:bg-[#f2f2f2] hover:bg-[#ddd]">
                    <td className="border py-2 px-1">Loading...</td>
                  </tr>
                }
              >
                <Await
                  resolve={mobilePSPs.mobilePSPResponse}
                  errorElement={
                    <tr className="even:bg-[#f2f2f2] hover:bg-[#ddd]">
                      <td className="border py-2 px-1">
                        Error loading counterfeit currency frauds!
                      </td>
                    </tr>
                  }
                >
                  {(mobilePSPResponse) =>
                    mobilePSPResponse.data.map((trustAcc) => (
                      <MobilePSPRow key={trustAcc.rowId} trustAcc={trustAcc} />
                    ))
                  }
                </Await>
              </Suspense>
            </tbody>
          </table>
        </div>

        <button
          type="button"
          onClick={openModal}
          className="border px-5 py-1 w-fit ml-8 rounded-md transition-all hover:bg-gray-400 hover:text-white duration-300"
        >
          Add
        </button>
      </div>

      <AddMobilePSPModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default MobilePSP;
