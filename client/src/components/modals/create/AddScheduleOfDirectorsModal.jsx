/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import apiRequest from "../../../lib/apiRequest";

export default function AddScheduleOfDirectorsModal({ isOpen, setIsOpen }) {
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
        "/psp-schedule-of-directors",
        data
      );
      console.log("Director: ", response.data);
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
                    Add a PSP Schedule of Director
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
                          required
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
                          required
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="directorName"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DIRECTOR&apos;S NAME
                        </label>
                        <input
                          type="text"
                          name="directorName"
                          id="directorName"
                          required
                          placeholder="Jane Doe"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="directorGender"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DIRECTOR&apos;S GENDER
                        </label>
                        <select
                          name="directorGender"
                          id="directorGender"
                          required
                          className="outline-none border p-1.5 rounded"
                        >
                          <option value="F">Female</option>
                          <option value="M">Male</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="directorType"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DIRECTOR TYPE
                        </label>

                        <select
                          name="directorType"
                          id="directorType"
                          required
                          className="outline-none border p-1.5 rounded"
                        >
                          <option value="EXECUTIVE">Executive</option>
                          <option value="NONEXECUTIVE">Non-Executive</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="dateOfBirth"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DATE OF BIRTH
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          id="dateOfBirth"
                          required
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="nationalityOfDirector"
                          className="text-nowrap font-semibold text-sm"
                        >
                          NATIONALITY OF DIRECTOR
                        </label>
                        <input
                          type="text"
                          name="nationalityOfDirector"
                          id="nationalityOfDirector"
                          placeholder="KE"
                          required
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="residenceOfDirector"
                          className="text-nowrap font-semibold text-sm"
                        >
                          COUNTRY OF RESIDENCE
                        </label>
                        <input
                          type="text"
                          name="residenceOfDirector"
                          id="residenceOfDirector"
                          placeholder="KE"
                          required
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="idNumber"
                          className="text-nowrap font-semibold text-sm"
                        >
                          ID/PASSPORT NUMBER
                        </label>
                        <input
                          type="text"
                          name="idNumber"
                          id="idNumber"
                          required
                          placeholder="12345678"
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
