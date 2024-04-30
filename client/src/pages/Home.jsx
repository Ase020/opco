import { Link, Navigate } from "react-router-dom";

import { navLinks } from ".";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;

  const renderNavLinks =
    currentUser.userType === "superAdmin"
      ? navLinks
      : navLinks.filter((link) => link.userType === currentUser.userType);

  return (
    <main className="max-w-[1440px] mx-auto py-10 flex flex-col gap-12">
      <h1 className="text-center text-4xl font-bold">
        Welcome to Airtel Data Transmission Portal
      </h1>
      <nav className="flex items-center flex-col gap-6">
        {renderNavLinks.map(({ id, title, link }) => (
          <Link
            key={id}
            to={link}
            className="border p-4 w-96 flex-center rounded-xl hover:shadow-md"
          >
            {title}
          </Link>
        ))}
      </nav>
    </main>
  );
};

export default Home;
