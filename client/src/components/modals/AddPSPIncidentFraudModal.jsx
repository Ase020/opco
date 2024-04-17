/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function AddPSPIncidentFraudModal({ isOpen, setIsOpen }) {
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
                    Add a PSP Incident of fraud theft robbery
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
                          placeholder="141"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="fraudCode"
                          className="text-nowrap font-semibold text-sm"
                        >
                          SUB FRAUD CODE
                        </label>
                        <input
                          type="number"
                          name="fraudCode"
                          id="fraudCode"
                          placeholder="CYBCRI"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="fraudCatFlag"
                          className="text-nowrap font-semibold text-sm"
                        >
                          FRAUD CATEGORY FLAG
                        </label>
                        <input
                          type="text"
                          name="fraudCatFlag"
                          id="fraudCatFlag"
                          placeholder="FCT01"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="victimCat"
                          className="text-nowrap font-semibold text-sm"
                        >
                          VICTIM CATEGORY
                        </label>
                        <input
                          type="text"
                          name="victimCat"
                          id="victimCat"
                          placeholder="Amref Health Africa"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="victimInfo"
                          className="text-nowrap font-semibold text-sm"
                        >
                          VICTIM INFO
                        </label>
                        <input
                          type="text"
                          name="victimInfo"
                          id="victimInfo"
                          placeholder="VICT03"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="occurrenceDate"
                          className="text-nowrap font-semibold text-sm"
                        >
                          OCCURRENCE DATE
                        </label>
                        <input
                          type="date"
                          name="occurrenceDate"
                          id="occurrenceDate"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="incidentNo"
                          className="text-nowrap font-semibold text-sm"
                        >
                          NUMBER OF INCIDENTS
                        </label>
                        <input
                          type="text"
                          name="incidentNo"
                          id="incidentNo"
                          placeholder="102"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="amountInvolved"
                          className="text-nowrap font-semibold text-sm"
                        >
                          AMOUNT INVOLVED
                        </label>
                        <input
                          type="number"
                          name="amountInvolved"
                          id="amountInvolved"
                          placeholder="1,000,482"
                          min={0}
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="amountLost"
                          className="text-nowrap font-semibold text-sm"
                        >
                          AMOUNT LOST
                        </label>
                        <input
                          type="number"
                          name="amountLost"
                          id="amountLost"
                          placeholder="1,000,482"
                          min={0}
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="amountRecovered"
                          className="text-nowrap font-semibold text-sm"
                        >
                          AMOUNT RECOVERED
                        </label>
                        <input
                          type="number"
                          name="amountRecovered"
                          id="amountRecovered"
                          placeholder="0"
                          min={0}
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="actionTaken"
                          className="text-nowrap font-semibold text-sm"
                        >
                          ACTION TAKEN
                        </label>
                        <textarea
                          type="text"
                          name="actionTaken"
                          id="actionTaken"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="recoveryDetails"
                          className="text-nowrap font-semibold text-sm"
                        >
                          RECOVERY DETAILS
                        </label>

                        <select
                          name="recoveryDetails"
                          id="recoveryDetails"
                          className="outline-none border p-1.5 rounded"
                        >
                          <option value="incomplete">Incomplete</option>
                          <option value="complete">Complete</option>
                        </select>
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
