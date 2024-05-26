import { Link, Navigate } from "react-router-dom";

import { navLinks } from ".";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;

  console.log("Current User: ", currentUser);

  const renderNavLinks =
    currentUser.userType === "superAdmin"
      ? navLinks
      : navLinks.filter((link) => link.userType === currentUser.userType);

  return (
    <main className="max-w-[1440px] mx-auto py-10 flex flex-col gap-12">
      <h1 className="text-center text-4xl font-bold">
        Welcome to Airtel Data Transmission Portal
      </h1>
      <nav className="flex justify-around gap-6">
        {renderNavLinks.filter((link) => link.category === "psp").length >
          0 && (
          <aside className="flex items-center flex-col gap-6">
            <h3 className="text-3xl font-semibold">PSP</h3>
            {renderNavLinks
              .filter((link) => link.category === "psp")
              .map(({ id, title, link }) => (
                <Link
                  key={id}
                  to={link}
                  className="border p-4 w-96 flex-center rounded-xl hover:shadow-md text-center"
                >
                  {title}
                </Link>
              ))}
          </aside>
        )}

        {renderNavLinks.filter((link) => link.category === "bsd").length >
          0 && (
          <aside className="flex items-center flex-col gap-6">
            <h3 className="text-3xl font-semibold">BSD</h3>

            {renderNavLinks
              .filter((link) => link.category === "bsd")
              .map(({ id, title, link }) => (
                <Link
                  key={id}
                  to={link}
                  className="border p-4 w-96 flex-center rounded-xl hover:shadow-md text-center"
                >
                  {title}
                </Link>
              ))}
          </aside>
        )}
      </nav>
    </main>
  );
};

export default Home;
