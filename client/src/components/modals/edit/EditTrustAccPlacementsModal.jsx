/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import apiRequest from "../../../lib/apiRequest";

export default function EditTrustAccPlacementsModal({
  isOpen,
  setIsOpen,
  trustAcc,
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
        `/trust-account-placements/${trustAcc.rowId}`,
        data
      );
      console.log("Trust Acc Details: ", response.data);
      setLoading(false);
      setIsOpen(false);
      // console.log("Edit Data: ", data);
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
                    Edit Trust Account Placement
                  </Dialog.Title>
                  <form className="mt-3" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="pspId"
                          className="text-nowrap font-semibold text-sm"
                        >
                          PSP ID
                        </label>
                        <input
                          type="text"
                          name="pspId"
                          id="pspId"
                          className="outline-none border p-1.5 rounded"
                          defaultValue={trustAcc.pspId}
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
                          required
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="trustFundPlacement"
                          className="text-nowrap font-semibold text-sm"
                        >
                          TRUST FUND PLACEMENT
                        </label>
                        <input
                          type="text"
                          name="trustFundPlacement"
                          id="trustFundPlacement"
                          placeholder="TFP02"
                          className="outline-none border p-1.5 rounded"
                          defaultValue={trustAcc.trustFundPlacement}
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="trustFundInvMaturityDate"
                          className="text-nowrap font-semibold text-sm"
                        >
                          INV MATURITY DATE
                        </label>
                        <input
                          type="date"
                          name="trustFundInvMaturityDate"
                          id="trustFundInvMaturityDate"
                          className="outline-none border p-1.5 rounded"
                          defaultValue={trustAcc.trustFundInvMaturityDate}
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="catTrustFundInvestedAmt"
                          className="text-nowrap font-semibold text-sm"
                        >
                          INV AMOUNT
                        </label>
                        <input
                          type="number"
                          name="catTrustFundInvestedAmt"
                          id="catTrustFundInvestedAmt"
                          defaultValue={0}
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="interestAmtPerCat"
                          className="text-nowrap font-semibold text-sm"
                        >
                          INTEREST AMOUNT PER CAT
                        </label>
                        <input
                          type="number"
                          name="interestAmtPerCat"
                          id="interestAmtPerCat"
                          defaultValue={0}
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
