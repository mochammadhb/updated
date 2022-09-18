import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Toolbar from "../../Components/Toolbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // const cookie = cookies.get("refreshToken");
    // console.log(cookie);
  });
  const Login = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/v1/api/login", {
        username: username,
        password: password,
      });

      navigate("/");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.msg);
      }
    }
  };

  return (
    <div className="min-h-auto">
      <Toolbar name="Sign In" />
      <div className="justify-center">
        <form onSubmit={Login}>
          <div className="grid mb-3 px-5">
            <p
              className={
                message === ""
                  ? "hidden text-white text-sm w-full px-5 py-0.5 rounded-md bg-rose-500 mb-5"
                  : "text-white flex text-sm w-full px-5 py-0.5 rounded-md box-border bg-rose-500 mb-5  "
              }
            >
              {message}
            </p>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Username :
              </label>
              <input
                type="text"
                className="bg-slate-50 border outline-slate-600  border-slate-500 text-gray-900 placeholder-slate-500 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium text-gray-700 ">
                Password :
              </label>
              <input
                type="text"
                className="bg-slate-50 border outline-slate-600  border-slate-500 text-gray-900 placeholder-slate-500 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6 flex justify-between">
              <span className="flex items-center text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  className="bg-slate-50 border mr-1 outline-slate-600  border-slate-500 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block"
                />
                Remember me
              </span>
              <a
                href="#"
                className="text-sm font-medium text-indigo-500 hover:underline"
              >
                Forgot My Password?
              </a>
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="inline-flex items-center h-10 px-4 py-2 leading-6 shadow rounded-xl text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 w-full justify-center"
              >
                Sign In
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-700">
                Don't have an account?
                <Link
                  to="/profile/register/"
                  className="ml-1 hover:underline text-indigo-500"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
