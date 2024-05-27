import { useEffect, useState } from "react";
import { User } from "../components";
import apiRequest from "../lib/apiRequest";

function UserApprovals() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersData = await apiRequest.get("/users");
      setUsers(usersData.data);
    } catch (error) {
      console.error(error);
    }
  };

  const verifiedUsers = users.filter((user) => user.verified);
  const unverifiedUsers = users.filter((user) => !user.verified);

  return (
    <section className="max-w-[1440px] mx-auto flex justify-between gap-8 p-3">
      <div className="w-full flex flex-col gap-6">
        <h2 className="font-bold text-3xl">Verified Users</h2>

        {verifiedUsers ? (
          <ul className="px-5 flex flex-col gap-3">
            {verifiedUsers.length > 0 &&
              verifiedUsers.map((user) => <User key={user.id} user={user} />)}
          </ul>
        ) : (
          <div className="flex-center border size-full">
            <p className="font-bold text-2xl italic text-gray-500">
              No Verified Users Found!
            </p>
          </div>
        )}
      </div>

      <div className="w-full flex flex-col gap-6">
        <h2 className="font-bold text-3xl">Unverified Users</h2>

        {unverifiedUsers.length > 0 ? (
          <ul className="px-5 flex flex-col gap-3">
            {unverifiedUsers.length > 0 &&
              unverifiedUsers.map((user) => <User key={user.id} user={user} />)}
          </ul>
        ) : (
          <div className="flex-center border size-full">
            <p className="font-bold text-2xl italic text-gray-500">
              No Unverified Users Found!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default UserApprovals;
