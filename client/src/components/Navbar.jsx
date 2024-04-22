import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="max-w-[1440px] mx-auto py-10 px-6 flex items-center justify-between">
      <Link to="/">Home</Link>

      <div className="flex items-center gap-4">
        {currentUser ? (
          <ProfileDropdown />
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
