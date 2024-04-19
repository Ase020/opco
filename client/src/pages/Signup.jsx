const Signup = () => {
  return (
    <section className="max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-8 py-10">
      <h2 className="text-4xl font-semibold">Sign Up to Access Data</h2>

      <form
        action=""
        className="flex flex-col gap-6 p-6 rounded-xl shadow-md border max-w-96 w-full"
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="email" className="font-semibold">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border p-2 outline-none rounded-lg"
            placeholder="example@airtelafrica.com"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="username" className="font-semibold">
            Username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border p-2 outline-none rounded-lg"
            placeholder="JohnDoe"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="password" className="font-semibold">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border p-2 outline-none rounded-lg"
            placeholder="***************"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="password" className="font-semibold">
            Confirm Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border p-2 outline-none rounded-lg"
            placeholder="***************"
            required
          />
        </div>

        <button
          type="submit"
          className="border w-fit mx-auto py-1.5 px-6 rounded-lg transition-all duration-500 ease-in hover:bg-black hover:text-white"
        >
          Signup
        </button>
      </form>
    </section>
  );
};

export default Signup;
