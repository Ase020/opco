/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import apiRequest from "../../../../lib/apiRequest";

export default function EditOutletInfoModal({
  isOpen,
  setIsOpen,
  trustAcc,
  onRecordAdded,
}) {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErr("");
    setLoading(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await apiRequest.put(
        `/outlet-information/${trustAcc.rowId}`,
        data
      );
      console.log("Outlet Info: ", response.data);

      onRecordAdded();
      setLoading(false);
      setIsOpen(false);
    } catch (error) {
      setErr(error.response.data.message);
      setLoading(false);
    }
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
                    Edit Branch/Outlet Info
                  </Dialog.Title>
                  <form className="mt-3" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap gap-4 items-center justify-between">
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
                          defaultValue={trustAcc.bankId}
                          required
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="outletId"
                          className="text-nowrap font-semibold text-sm"
                        >
                          OUTLET ID
                        </label>
                        <input
                          type="text"
                          name="outletId"
                          id="outletId"
                          required
                          defaultValue={trustAcc.outletId}
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
                          required
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="typeOfOutlet"
                          className="text-nowrap font-semibold text-sm"
                        >
                          TYPE OF OUTLET
                        </label>
                        <input
                          type="text"
                          name="typeOfOutlet"
                          id="typeOfOutlet"
                          defaultValue={trustAcc.typeOfOutlet}
                          required
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="outletName"
                          className="text-nowrap font-semibold text-sm"
                        >
                          OUTLET NAME
                        </label>
                        <input
                          type="text"
                          name="outletName"
                          id="outletName"
                          defaultValue={trustAcc.outletName}
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="town"
                          className="text-nowrap font-semibold text-sm"
                        >
                          TOWN
                        </label>
                        <input
                          type="text"
                          name="town"
                          id="town"
                          defaultValue={trustAcc.town}
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="subCountyCode"
                          className="text-nowrap font-semibold text-sm"
                        >
                          SUB COUNTY CODE
                        </label>
                        <input
                          type="text"
                          name="subCountyCode"
                          id="subCountyCode"
                          defaultValue={trustAcc.subCountyCode}
                          required
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="latitude"
                          className="text-nowrap font-semibold text-sm"
                        >
                          LATITUDE
                        </label>
                        <input
                          type="text"
                          name="latitude"
                          id="latitude"
                          className="outline-none border p-1.5 rounded"
                          defaultValue={trustAcc.latitude}
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="longitude"
                          className="text-nowrap font-semibold text-sm"
                        >
                          LONGITUDE
                        </label>
                        <input
                          type="text"
                          name="longitude"
                          id="longitude"
                          className="outline-none border p-1.5 rounded"
                          defaultValue={trustAcc.longitude}
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="cbkApprovalDate"
                          className="text-nowrap font-semibold text-sm"
                        >
                          CBK APPROVAL DATE
                        </label>
                        <input
                          type="date"
                          name="cbkApprovalDate"
                          id="cbkApprovalDate"
                          required
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="outletStatus"
                          className="text-nowrap font-semibold text-sm"
                        >
                          OUTLET STATUS
                        </label>
                        <select
                          name="outletStatus"
                          id="outletStatus"
                          className="outline-none border p-1.5 rounded"
                          required
                        >
                          <option value="01">Active</option>
                          <option value="02">In-active</option>
                          <option value="03">Closed</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="openingDate"
                          className="text-nowrap font-semibold text-sm"
                        >
                          OPENING DATE
                        </label>
                        <input
                          type="date"
                          name="openingDate"
                          id="openingDate"
                          required
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="closureDate"
                          className="text-nowrap font-semibold text-sm"
                        >
                          CLOSING DATE
                        </label>
                        <input
                          type="date"
                          name="closureDate"
                          id="closureDate"
                          required
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="licenseFeePayable"
                          className="text-nowrap font-semibold text-sm"
                        >
                          LICENSE FEE PAYABLE
                        </label>
                        <input
                          type="text"
                          name="licenseFeePayable"
                          id="licenseFeePayable"
                          required
                          defaultValue={trustAcc.licenseFeePayable}
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        {loading ? "Updating..." : "Update"}
                      </button>
                    </div>
                  </form>

                  {err && <p className="text-red-400 italic">{err}</p>}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
