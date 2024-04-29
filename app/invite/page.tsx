import React from "react";
import NavBar from "@/components/Navbar";

const Invite = () => {
  return (
    <div>
      <div className="bg-purple-900 text-white py-4">
        <NavBar />
      </div>

      <div className="flex justify-center">
        <div className="mt-7 w-full max-w-md">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-full text-center">
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Invite Your Friends</h2>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email:
              </label>
              <div className="mt-1">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 pr-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Your Email"
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 sm:col-span-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Your Message:
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  rows={5}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Write us."
                  defaultValue={""}
                  readOnly
                />
              </div>
            </div>

            <div className="mt-6 sm:col-span-full">
              <button className="bg-purple-500 py-2 px-4 text-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50" disabled>
                Submit
              </button>
            </div>

            <div className="mt-6 sm:col-span-full flex justify-center">
              <div className="flex space-x-4 text-4xl">
                <a href="#"><img src="/facebook-favicon.png" alt="Facebook" className="w-8 h-8 text-purple-700" /></a>
                <a href="#"><img src="/twitter-favicon.png" alt="Twitter" className="w-8 h-8 text-purple-700" /></a>
                <a href="#"><img src="/linkedin-favicon.png" alt="LinkedIn" className="w-8 h-8 text-purple-700" /></a>
                <a href="#"><img src="/medium-favicon.png" alt="Medium" className="w-8 h-8 text-purple-700" /></a>
                <a href="#"><img src="/instagram-favicon.png" alt="Instagram" className="w-8 h-8 text-purple-700" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invite;



