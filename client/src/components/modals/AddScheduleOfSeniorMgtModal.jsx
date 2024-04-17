/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function AddTrustAccPlacementModal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async (e) => {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    e.preventDefault();
    setIsOpen(false);

    console.log("Close", data);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h2"
                    className="text-2xl font-bold text-gray-900"
                  >
                    Add a Trust Account
                  </Dialog.Title>
                  <form className="mt-3" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="psp"
                          className="text-nowrap font-semibold text-sm"
                        >
                          PSP ID
                        </label>
                        <input
                          type="text"
                          name="psp"
                          id="psp"
                          placeholder="0800002"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="bankId"
                          className="text-nowrap font-semibold text-sm"
                        >
                          BANK ID
                        </label>
                        <input
                          type="text"
                          name="bankId"
                          id="bankId"
                          placeholder="0000001"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="reportingDate"
                          className="text-nowrap font-semibold text-sm"
                        >
                          REPORTING DATE
                        </label>
                        <input
                          type="date"
                          name="reportingDate"
                          id="reportingDate"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="bankAcc"
                          className="text-nowrap font-semibold text-sm"
                        >
                          BANK ACCOUNT
                        </label>
                        <input
                          type="number"
                          name="bankAcc"
                          id="bankAcc"
                          placeholder="440003475411"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="trustCode"
                          className="text-nowrap font-semibold text-sm"
                        >
                          TRUST ACC TYPE CODE
                        </label>
                        <input
                          type="text"
                          name="trustCode"
                          id="trustCode"
                          placeholder="DBT01"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="orgName"
                          className="text-nowrap font-semibold text-sm"
                        >
                          ORG RECEIVING DONATION
                        </label>
                        <input
                          type="text"
                          name="orgName"
                          id="orgName"
                          placeholder="Amref Health Africa"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="sectorCode"
                          className="text-nowrap font-semibold text-sm"
                        >
                          SECTOR CODE
                        </label>
                        <input
                          type="text"
                          name="sectorCode"
                          id="sectorCode"
                          placeholder="Sector Code"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="trustAcc"
                          className="text-nowrap font-semibold text-sm"
                        >
                          TRUST ACC INT UTILIZED
                        </label>
                        <input
                          type="text"
                          name="trustAcc"
                          id="trustAcc"
                          placeholder="DBT04"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="openingBal"
                          className="text-nowrap font-semibold text-sm"
                        >
                          OPENING BALANCE
                        </label>
                        <input
                          type="number"
                          name="openingBal"
                          id="openingBal"
                          placeholder="120,540,482.00"
                          min={0}
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="principalAmt"
                          className="text-nowrap font-semibold text-sm"
                        >
                          PRINCIPAL AMOUNT
                        </label>
                        <input
                          type="number"
                          name="principalAmt"
                          id="principalAmt"
                          placeholder="120,540,482.00"
                          className="outline-none border p-1.5 rounded"
                          min={0}
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="interestEarned"
                          className="text-nowrap font-semibold text-sm"
                        >
                          INTEREST EARNED
                        </label>
                        <input
                          type="number"
                          name="interestEarned"
                          id="interestEarned"
                          placeholder="12,054,048.20"
                          className="outline-none border p-1.5 rounded"
                          min={0}
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="interestUtilized"
                          className="text-nowrap font-semibold text-sm"
                        >
                          INTEREST UTILIZED
                        </label>
                        <input
                          type="number"
                          name="interestUtilized"
                          id="interestUtilized"
                          placeholder="10,840,000"
                          className="outline-none border p-1.5 rounded"
                          min={0}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
