const SignupForm = () => {
  return (
    <>
      <section
        id="signup"
        className="flex justify-center items-center min-h-screen"
      >
        <div className="w-full placeholder-gray-300 max-w-4xl bg-white p-6">
          <h2 className="text-5xl font-bold text-center mb-10">Sign Up</h2>
          <h3 className="text-3xl font-semibold">User Information</h3>
          <form className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xl font-medium text-gray-700">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 p-2 w-full placeholder-gray-300"
                />
              </div>
              <div>
                <label className="block text-xl font-medium text-gray-700">
                  Mobile phone number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Mobile phone number"
                  className="border border-gray-300 p-2 w-full placeholder-gray-300"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xl font-medium text-gray-700">
                User name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="User name"
                className="border border-gray-300 p-2 w-full placeholder-gray-300"
              />
            </div>
            <div className="mt-4">
              <label className="block text-xl font-medium text-gray-700">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 p-2 w-full placeholder-gray-300"
              />
            </div>
            <div className="mt-4">
              <label className="block text-xl font-medium text-gray-700">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="border border-gray-300 p-2 w-full placeholder-gray-300"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-xl font-medium text-gray-700">
                  First name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-gray-300 p-2 w-full placeholder-gray-300"
                />
              </div>
              <div>
                <label className="block text-xl font-medium text-gray-700">
                  Last name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-gray-300 p-2 w-full placeholder-gray-300"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xl font-medium text-gray-700">
                Street number and name or P.O box<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Street number and name or P.O box"
                className="border border-gray-300 p-2 w-full placeholder-gray-300"
              />
            </div>
            <div className="mt-4">
              <label className="block text-xl font-medium text-gray-700">
                Specify company, apt, suite, unit (optional)
              </label>
              <input
                type="text"
                placeholder="Specify company, apt, suite, unit (optional)"
                className="border border-gray-300 p-2 w-full placeholder-gray-300"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-xl font-medium text-gray-700">
                  City<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className="border border-gray-300 p-2 w-full placeholder-gray-300"
                />
              </div>
              <div>
                <label className="block text-xl font-medium text-gray-700">
                  Postal code<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Postal code"
                  className="border border-gray-300 p-2 w-full placeholder-gray-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-xl font-medium text-gray-700">
                  State<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="State"
                  className="border border-gray-300 p-2 w-full placeholder-gray-300"
                />
              </div>
              <div>
                <label className="block text-xl font-medium text-gray-700">
                  Country<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Country"
                  className="border border-gray-300 p-2 w-full placeholder-gray-300"
                />
              </div>
            </div>
            <div className="space-y-3 mt-5">
              <label className="flex items-center gap-2 text-lg">
                <input type="checkbox" className="form-checkbox w-6 h-6" />
                Please send me SMS shipping updates about my order
              </label>
              <label className="flex items-center gap-2 text-lg">
                <input type="checkbox" className="form-checkbox w-6 h-6" />
                Please add me to the Custommike? email list
              </label>
            </div>
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="text-2xl placeholder-gray-300 bg-[#334DD8] text-white py-2 px-3 w-[456px] h-[56px] rounded-full hover:bg-blue-700"
              >
                Sign Up
              </button>
            </div>

            <p className="text-gray-400 mt-10 mb-8 text-center">
              By signing up I agree to the
              <a href="#" className="underline">
                terms and conditions
              </a>{" "}
              and
              <a href="#" className="underline">
                privacy policy
              </a>
              .
            </p>
          </form>
        </div>
      </section>
    </>
  );
};
export default SignupForm;
