/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function AddPSPCybersecurityModal({ isOpen, setIsOpen }) {
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
                    Add a PSP Cybersecurity Incident Record
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
                          htmlFor="incidentNo"
                          className="text-nowrap font-semibold text-sm"
                        >
                          INCIDENT NUMBER
                        </label>
                        <input
                          type="text"
                          name="incidentNo"
                          id="incidentNo"
                          placeholder="785"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="attackerLocation"
                          className="text-nowrap font-semibold text-sm"
                        >
                          LOCATION OF ATTACKER
                        </label>
                        <input
                          type="text"
                          name="attackerLocation"
                          id="attackerLocation"
                          placeholder="Nigeria"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="incidentMode"
                          className="text-nowrap font-semibold text-sm"
                        >
                          INCIDENT MODE
                        </label>
                        <input
                          type="text"
                          name="incidentMode"
                          id="incidentMode"
                          placeholder="ICDT01"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="incidentDate"
                          className="text-nowrap font-semibold text-sm"
                        >
                          INCIDENT DATE
                        </label>
                        <input
                          type="date"
                          name="incidentDate"
                          id="incidentDate"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="lossType"
                          className="text-nowrap font-semibold text-sm"
                        >
                          LOSS TYPE
                        </label>
                        <input
                          type="text"
                          name="lossType"
                          id="lossType"
                          placeholder="FIN"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="details"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DETAILS OF THE INCIDENT
                        </label>
                        <textarea
                          type="text"
                          name="details"
                          id="details"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="actionTaken"
                          className="text-nowrap font-semibold text-sm"
                        >
                          ACTION TAKEN TO MANAGE
                        </label>
                        <input
                          type="text"
                          name="actionTaken"
                          id="actionTaken"
                          placeholder="120,540,482.00"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="incidentResDate"
                          className="text-nowrap font-semibold text-sm"
                        >
                          INCIDENT RESOLUTION DATE
                        </label>
                        <input
                          type="date"
                          name="incidentResDate"
                          id="incidentResDate"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="mitigationAction"
                          className="text-nowrap font-semibold text-sm"
                        >
                          MITIGATION ACTION
                        </label>
                        <textarea
                          type="text"
                          name="mitigationAction"
                          id="mitigationAction"
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
                          placeholder="1,540,482"
                          className="outline-none border p-1.5 rounded"
                          min={0}
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
                          placeholder="54,048"
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
