import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-10 flex items-center justify-between">
      <Link to="/">Home</Link>

      <div className="flex items-center gap-4">
        <Link to="/login" className="hover:underline">
          Login
        </Link>
        <Link to="/signup" className="hover:underline">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
