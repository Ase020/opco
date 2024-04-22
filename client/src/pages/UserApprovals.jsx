import { useContext } from "react";
import { User } from "../components";
import { UsersContext } from "../context/UsersContext";

function UserApprovals() {
  const { verifiedUsers, unverifiedUsers } = useContext(UsersContext);

  return (
    <section className="max-w-[1440px] mx-auto flex justify-between gap-8 p-3">
      <div className="w-full flex flex-col gap-6">
        <h2 className="font-bold text-3xl">Verified Users</h2>

        <ul className="px-5 flex flex-col gap-3">
          {verifiedUsers.length > 0 &&
            verifiedUsers.map((user) => <User key={user.id} user={user} />)}
        </ul>
      </div>

      <div className="w-full flex flex-col gap-6">
        <h2 className="font-bold text-3xl">Unverified Users</h2>

        <ul className="px-5 flex flex-col gap-3">
          {unverifiedUsers.length > 0 &&
            unverifiedUsers.map((user) => <User key={user.id} user={user} />)}
        </ul>
      </div>
    </section>
  );
}

export default UserApprovals;
