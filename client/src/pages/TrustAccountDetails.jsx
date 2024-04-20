import { Suspense, useState } from "react";
import {
  AddTrustAccDetailsModal,
  TrustAccDetailsHeader,
  TrustAccDetailsRow,
} from "../components";
import { Await, useLoaderData } from "react-router-dom";

const TrustAccountDetails = () => {
  const trustAccounts = useLoaderData();

  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">Trust Account Details</h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <TrustAccDetailsHeader />

            <tbody>
              <Suspense
                fallback={
                  <tr className="even:bg-[#f2f2f2] hover:bg-[#ddd]">
                    <td className="border py-2 px-1">Loading...</td>
                  </tr>
                }
              >
                <Await
                  resolve={trustAccounts.trustAccDetailsResponse}
                  errorElement={
                    <tr className="even:bg-[#f2f2f2] hover:bg-[#ddd]">
                      <td className="border py-2 px-1">
                        Error loading trust accounts!
                      </td>
                    </tr>
                  }
                >
                  {(trustAccDetailsResponse) =>
                    trustAccDetailsResponse.data.map((trustAcc) => (
                      <TrustAccDetailsRow
                        key={trustAcc.rowId}
                        trustAcc={trustAcc}
                      />
                    ))
                  }
                </Await>
              </Suspense>
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

      <AddTrustAccDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default TrustAccountDetails;
