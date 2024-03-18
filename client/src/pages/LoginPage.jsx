import axios from "axios";
import React, { useContext, useState } from "react";
import { backend_url } from "../App";
import { AuthContext } from "../context/authContext";
import { redirect } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, user } = useContext(AuthContext);

  const checkLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${backend_url}/user/checkuser`, {
      email: email,
      password: password,
    });
    dispatch({type:"LOGIN_SUCCESS", payload:response.data})
  };

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <h2 className="font-semibold text-2xl mb-4 block text-center">Log in</h2>

      <form onSubmit={checkLogin}>
        <div className="space-y-2">
          <div>
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full block border p-3 text-gray-600 rounded focus: shadow-outline focus:border-blue-200 placeholder-gray-400 "
              placeholder="Enter Email"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full block border p-3 text-gray-600 rounded focus: shadow-outline focus:border-blue-200 placeholder-gray-400 "
              placeholder="Enter Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="block w-full mt-6 bg-blue-700 text-white rounded px-4 py-2 font-bold hover:bg-blue-600 hover:cursor"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
