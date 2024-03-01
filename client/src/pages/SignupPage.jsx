import React, {  useState } from "react";
import axios from "axios";
import { backend_url } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${backend_url}/user/newuser`, {
      name: name,
      email: email,
      password: password,
    });
    console.log(response);
    toast.success(`${response.data.name} is a new user`);
    navigate("/login");
  };

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <h2 className="font-semibold text-2xl mb-4 block text-center">Sing in</h2>

      <form onSubmit={saveUser}>
        <div className="space-y-2">
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full block border p-3 text-gray-600 rounded focus: shadow-outline focus:border-blue-200 placeholder-gray-400 "
              placeholder="Enter Name"
            />
          </div>
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

export default SignupPage;
