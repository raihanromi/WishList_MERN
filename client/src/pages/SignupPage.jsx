import React from "react";

const SignupPage = () => {
  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <h2 className="font-semibold text-2xl mb-4 block text-center">
       Sing in
      </h2>
      <form>
        <div className="space-y-2">
          <div>
            <label>Name</label>
            <input
              type="text"
              value=""
              className="w-full block border p-3 text-gray-600 rounded focus: shadow-outline focus:border-blue-200 placeholder-gray-400 "
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              value=""
              className="w-full block border p-3 text-gray-600 rounded focus: shadow-outline focus:border-blue-200 placeholder-gray-400 "
              placeholder="Enter Quantity"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="text"
              value=""
              className="w-full block border p-3 text-gray-600 rounded focus: shadow-outline focus:border-blue-200 placeholder-gray-400 "
              placeholder="Enter Price"
            />
          </div>
          <div>
            <button className="block w-full mt-6 bg-blue-700 text-white rounded px-4 py-2 font-bold hover:bg-blue-600 hover:cursor">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
