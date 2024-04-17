/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function AddMobilePSPModal({ isOpen, setIsOpen }) {
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
                    Mobile PSP Counterfeit Currency Fraud{" "}
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
                          htmlFor="countyCode"
                          className="text-nowrap font-semibold text-sm"
                        >
                          SUB COUNTY CODE
                        </label>
                        <input
                          type="text"
                          name="countyCode"
                          id="countyCode"
                          placeholder="121"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="agentId"
                          className="text-nowrap font-semibold text-sm"
                        >
                          AGENT ID
                        </label>
                        <input
                          type="text"
                          name="agentId"
                          id="agentId"
                          placeholder="90200"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="denominationCode"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DENOMINATION CODE
                        </label>
                        <input
                          type="text"
                          name="denominationCode"
                          id="denominationCode"
                          placeholder="KES1000"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="serialNo"
                          className="text-nowrap font-semibold text-sm"
                        >
                          SERIAL NO
                        </label>
                        <input
                          type="text"
                          name="serialNo"
                          id="serialNo"
                          placeholder="AB0029977"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="depositor"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DEPOSITOR&apos;S NAME
                        </label>
                        <input
                          type="text"
                          name="depositor"
                          id="depositor"
                          placeholder="John Doe"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="teller"
                          className="text-nowrap font-semibold text-sm"
                        >
                          TELLER&apos;S NAME
                        </label>
                        <input
                          type="text"
                          name="teller"
                          id="teller"
                          placeholder="Jane Doe"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="dateConfiscated"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DATE CONFISCATED
                        </label>
                        <input
                          type="date"
                          name="dateConfiscated"
                          id="dateConfiscated"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="dateSubmitted"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DATE SUBMITTED
                        </label>
                        <input
                          type="date"
                          name="dateSubmitted"
                          id="dateSubmitted"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="pieces"
                          className="text-nowrap font-semibold text-sm"
                        >
                          PIECES
                        </label>
                        <input
                          type="number"
                          name="pieces"
                          id="pieces"
                          placeholder="120,540,482.00"
                          className="outline-none border p-1.5 rounded"
                          min={0}
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="remarks"
                          className="text-nowrap font-semibold text-sm"
                        >
                          REMARKS
                        </label>
                        <textarea
                          type="number"
                          name="remarks"
                          id="remarks"
                          min={0}
                          className="outline-none border p-1.5 rounded"
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
