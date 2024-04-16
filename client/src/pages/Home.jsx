import { Link } from "react-router-dom";

import { navLinks } from ".";

const Home = () => {
  return (
    <main className="max-w-[1440px]  mx-auto py-10">
      <nav className="flex items-center flex-col gap-6">
        {navLinks.map(({ id, title, link }) => (
          <Link key={id} to={link} className="hover:underline">
            {title}
          </Link>
        ))}
      </nav>
    </main>
  );
};

export default Home;
