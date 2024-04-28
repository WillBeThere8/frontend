import React from "react";
import NavBar from "@/components/Navbar";

const Contact = () => {
  return (
    <div>
      <div className=" h-[100px] bg-black">
        <NavBar />
      </div>

      <div className="flex justify-center">
        <form className="mt-7 w-full max-w-md">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name:
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 pr-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Your Name"
                  />
                </div>
              </div>
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
                    name="email"
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
                  name="message"
                  rows={5}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Write us."
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="mt-6 sm:col-span-full">
              <button className="bg-purple-500 py-2 px-4 text-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
