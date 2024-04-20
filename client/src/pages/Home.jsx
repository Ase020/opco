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
    <main className="max-w-[1440px]  mx-auto py-10">
      <nav className="flex items-center flex-col gap-6">
        {renderNavLinks.map(({ id, title, link }) => (
          <Link key={id} to={link} className="hover:underline">
            {title}
          </Link>
        ))}
      </nav>
    </main>
  );
};

export default Home;
