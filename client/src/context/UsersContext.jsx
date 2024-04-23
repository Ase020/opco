import { createContext, useEffect, useState } from "react";
import apiRequest from "../lib/apiRequest";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
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

  const verifyUser = async (userId) => {
    try {
      await apiRequest.patch(`/users/${userId}`, {
        verified: true,
      });

      fetchData();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await apiRequest.delete(`/users/${userId}`);

      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const verifiedUsers = users.filter((user) => user.verified);
  const unverifiedUsers = users.filter((user) => !user.verified);

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        verifiedUsers,
        unverifiedUsers,
        verifyUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
