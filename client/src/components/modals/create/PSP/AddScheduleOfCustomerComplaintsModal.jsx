/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import apiRequest from "../../../../lib/apiRequest";

export default function AddScheduleOfCustomerComplaintsModal({
  isOpen,
  setIsOpen,
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
      const response = await apiRequest.post(
        "/psp-schedule-of-customer-compliants-&-remedial-actions",
        data
      );
      console.log("Customer Complaint: ", response.data);

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
                    Add a Schedule of Customer Compliants & Remedial Action
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
                        <select
                          name="pspId"
                          id="pspId"
                          required
                          className="outline-none border p-1.5 rounded"
                        >
                          <option value="0800001">Safaricom Plc</option>
                          <option value="0800001">Safaricom Plc</option>
                        </select>
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
                          htmlFor="code"
                          className="text-nowrap font-semibold text-sm"
                        >
                          COMPLAINANT TYPE
                        </label>
                        <select
                          name="code"
                          id="code"
                          required
                          className="outline-none border p-1.5 rounded"
                        >
                          <option value="CCS01">Unexpected charges</option>
                          <option value="CCS02">Undisclosed charges</option>
                          <option value="CCS03">
                            Non-receipt of funds sent
                          </option>
                          <option value="CCS04">Sending failure</option>
                          <option value="CCS05">
                            Product/service not working or unavailable
                          </option>
                          <option value="CCS06">
                            Product issued to customer not the right one s/he
                            needed
                          </option>
                          <option value="CCS07">
                            Product terms and conditions not displayed or given
                            to customer
                          </option>
                          <option value="CCS08">
                            Product terms and conditions not explained clearly
                            and in a simple manner
                          </option>
                          <option value="CCS09">
                            Temination of service without prior and sufficient
                            notice
                          </option>
                          <option value="CCS10">
                            Paid for service but it has not been provided or
                            activated
                          </option>
                          <option value="CCS11">
                            Unauthorised and excessive sending of promotional
                            text messages
                          </option>
                          <option value="CCS12">
                            Lack of clear channel for making a complaint
                          </option>
                          <option value="CCS13">
                            Resolution of complaint took/takes excessively long
                          </option>
                          <option value="CCS14">
                            Lack of a clear recourse mechanism
                          </option>
                          <option value="CCS15">
                            {"Customer's"} data & info disclosed to other
                            parties without prior consent
                          </option>
                          <option value="CCS99">Other complaint type</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="gender"
                          className="text-nowrap font-semibold text-sm"
                        >
                          COMPLAINANT&apos;S GENDER
                        </label>
                        <select
                          name="gender"
                          id="gender"
                          required
                          className="outline-none border p-1.5 rounded"
                        >
                          <option value="F">Female</option>
                          <option value="M">Male</option>
                          <option value="C">Corporate</option>
                          <option value="O">Other</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="frequency"
                          className="text-nowrap font-semibold text-sm"
                        >
                          COMPLAINTS FREQUENCY
                        </label>

                        <select
                          name="frequency"
                          id="frequency"
                          required
                          className="outline-none border p-1.5 rounded"
                        >
                          <option value="CFQC01">First-timer</option>
                          <option value="CFQC02">Second-timer</option>
                          <option value="CFQC03">Third-timer</option>
                          <option value="CFQC04">Forth-timer</option>
                          <option value="CFQC05">Fifth-timer</option>
                          <option value="CFQC99">Any other</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="name"
                          className="text-nowrap font-semibold text-sm"
                        >
                          {"COMPLAINANT'S"} NAME
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="age"
                          className="text-nowrap font-semibold text-sm"
                        >
                          {"COMPLAINANT'S"} AGE
                        </label>
                        <input
                          type="number"
                          name="age"
                          id="age"
                          placeholder="27"
                          min={16}
                          max={120}
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="contact"
                          className="text-nowrap font-semibold text-sm"
                        >
                          CONTACT NUMBER
                        </label>
                        <input
                          type="text"
                          name="contact"
                          id="contact"
                          placeholder="0712345678"
                          required
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="subCounty"
                          className="text-nowrap font-semibold text-sm"
                        >
                          COMPLAINANT&apos;S SUBCOUNTY
                        </label>
                        <input
                          type="text"
                          name="subCounty"
                          id="subCounty"
                          required
                          placeholder="Kiambu"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="kraPin"
                          className="text-nowrap font-semibold text-sm"
                        >
                          KRA PIN NUMBER
                        </label>
                        <input
                          type="text"
                          name="kraPin"
                          id="kraPin"
                          required
                          placeholder="A123456789Z"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="contact"
                          className="text-nowrap font-semibold text-sm"
                        >
                          CONTACT
                        </label>
                        <input
                          type="text"
                          name="contact"
                          id="contact"
                          required
                          placeholder="254712345678"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="academicQualifications"
                          className="text-nowrap font-semibold text-sm"
                        >
                          ACADEMIC/PROF QUALIFICATIONS
                        </label>
                        <input
                          type="text"
                          name="academicQualifications"
                          id="academicQualifications"
                          placeholder="ELAC04"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="otherDirectorships"
                          className="text-nowrap font-semibold text-sm"
                        >
                          OTHER DIRECTORSHIPS
                        </label>
                        <textarea
                          type="text"
                          name="otherDirectorships"
                          id="otherDirectorships"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="dateOfAppointment"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DATE OF APPOINTMENT
                        </label>
                        <input
                          type="date"
                          name="dateOfAppointment"
                          id="dateOfAppointment"
                          required
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="dateOfRetirement"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DATE OF RETIREMENT
                        </label>
                        <input
                          type="date"
                          name=" dateOfRetirement"
                          id=" dateOfRetirement"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="reasonForRetirement"
                          className="text-nowrap font-semibold text-sm"
                        >
                          REASON FOR RETIREMENT
                        </label>
                        <textarea
                          type="text"
                          name="reasonForRetirement"
                          id="reasonForRetirement"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="disclosureDetails"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DISCLOSURE & TRANSPARENCY DETAILS
                        </label>
                        <textarea
                          type="text"
                          name="disclosureDetails"
                          id="disclosureDetails"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        {loading ? "Saving..." : "Save"}
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
