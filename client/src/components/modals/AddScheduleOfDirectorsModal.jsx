/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function AddScheduleOfDirectorsModal({ isOpen, setIsOpen }) {
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
                    Add a PSP Schedule of Director
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
                          htmlFor="directorName"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DIRECTOR&apos;S NAME
                        </label>
                        <input
                          type="text"
                          name="directorName"
                          id="directorName"
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
                          className="outline-none border p-1.5 rounded"
                        >
                          <option value="female">Female</option>
                          <option value="male">Male</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="trustCode"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DIRECTOR TYPE
                        </label>

                        <select
                          name="directorType"
                          id="directorType"
                          className="outline-none border p-1.5 rounded"
                        >
                          <option value="executive">Executive</option>
                          <option value="non-executive">Non-Executive</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="dob"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DATE OF BIRTH
                        </label>
                        <input
                          type="date"
                          name="dob"
                          id="dob"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="nationality"
                          className="text-nowrap font-semibold text-sm"
                        >
                          NATIONALITY OF DIRECTOR
                        </label>
                        <input
                          type="text"
                          name="nationality"
                          id="nationality"
                          placeholder="KE"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="residence"
                          className="text-nowrap font-semibold text-sm"
                        >
                          COUNTRY OF RESIDENCE
                        </label>
                        <input
                          type="text"
                          name="residence"
                          id="residence"
                          placeholder="KE"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="passport"
                          className="text-nowrap font-semibold text-sm"
                        >
                          ID/PASSPORT NUMBER
                        </label>
                        <input
                          type="text"
                          name="passport"
                          id="passport"
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
                          placeholder="254712345678"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="academic"
                          className="text-nowrap font-semibold text-sm"
                        >
                          ACADEMIC/PROFESSIONAL QUALIFICATIONS
                        </label>
                        <input
                          type="text"
                          name="academic"
                          id="academic"
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
                          placeholder="ELAC04"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="appointmentDate"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DATE OF APPOINTMENT
                        </label>
                        <input
                          type="date"
                          name="appointmentDate"
                          id="appointmentDate"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="retirementDate"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DATE OF RETIREMENT
                        </label>
                        <input
                          type="date"
                          name=" retirementDate"
                          id=" retirementDate"
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="retirementReason"
                          className="text-nowrap font-semibold text-sm"
                        >
                          REASON FOR RETIREMENT
                        </label>
                        <input
                          type="text"
                          name="retirementReason"
                          id="retirementReason"
                          placeholder="120,540,482.00"
                          min={0}
                          className="outline-none border p-1.5 rounded"
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-56">
                        <label
                          htmlFor="disclosure"
                          className="text-nowrap font-semibold text-sm"
                        >
                          DISCLOSURE & TRANSPARENCY DETAILS
                        </label>
                        <textarea
                          type="text"
                          name="disclosure"
                          id="disclosure"
                          placeholder="ELAC04"
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
