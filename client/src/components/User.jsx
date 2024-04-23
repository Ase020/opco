import { useContext } from "react";
import PropTypes from "prop-types";

import { UsersContext } from "../context/UsersContext";

export default function User({ user }) {
  const { verifyUser } = useContext(UsersContext);

  return (
    <div className="border p-2 rounded-lg flex justify-between">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-base">{user?.username}</h2>
        <h2 className="font-normal text-base">{user?.email}</h2>
        <p className="font-normal italic text-sm text-gray-500">
          {user?.userType}
        </p>
      </div>

      <div className="flex items-center gap-6 mr-4">
        <button
          type="button"
          className={`px-4 py-1.5 rounded-lg bg-black/20
          ${user?.verified === false ? "hover:bg-black/30" : ""}
           text-white`}
          disabled={user?.verified}
          onClick={() => verifyUser(user?.id)}
        >
          Verify
        </button>

        <button
          type="button"
          className="px-4 py-1.5 rounded-lg bg-red-400 hover:bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object,
};
