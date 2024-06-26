import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import apiRequest from "../lib/apiRequest";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  });

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

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        verifyUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

UsersContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
