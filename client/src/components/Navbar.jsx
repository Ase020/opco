import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";

const Navbar = () => {
  const { currentUser, updateUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div className="max-w-[1440px] mx-auto py-10 px-4 flex items-center justify-between">
      <Link to="/">Home</Link>

      <div className="flex items-center gap-4">
        {currentUser ? (
          <button
            type="button"
            className="hover:underline"
            onClick={handleLogout}
          >
            {currentUser.username}
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/signup" className="hover:underline">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
