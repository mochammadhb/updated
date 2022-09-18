import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
import Toolbar from "../../Components/Toolbar";

export default class Register extends Component {
  state = {
    fullname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    checkBox: false,
    errorMsg: "",
    errorResponse: {
      fullname: "",
      username: "",
      email: "",
      phone: "",
    },
    setButton: false,
  };

  Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/v1/api/register", {
        fullname: this.state.fullname,
        username: this.state.username,
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        checked: this.state.checkBox,
      });
      let count = 0;
      const time = setInterval(() => {
        this.setState({ setButton: true });
        count++;
        if (count >= 3) {
          clearInterval(time);
          useNavigate("/accounts/login");
        }
      }, 1000);
    } catch (error) {
      if (error.response.status === 500) {
        const errorData = error.response.data.msg;
        errorData.map((e) => {
          return this.setState({ errorResponse: e });
        });
      } else if (error.response.status === 403) {
        return this.setState({ errorMsg: error.response.data.msg });
      }
    }
  };

  render() {
    return (
      <div className="h-auto bg-slate-50">
        <Toolbar name="Sign Up" />
        <div className="p-5">
          <h1 className="text-3xl text-gray-700 font-bold tracking-wide">
            Hi Friend,
          </h1>
          <p className="text-base text-gray-700">
            fill up personal information and join start journey with us.
          </p>
        </div>
        <div className="justify-center">
          <form onSubmit={this.Register}>
            <div className="mb-3 px-5 pt-0">
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Fullname :
                </label>
                <div>
                  <input
                    type="text"
                    name="fullname"
                    className="bg-slate-50 border outline-slate-600  border-slate-500 text-gray-900 placeholder-slate-500 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
                    placeholder="Fullname"
                    value={this.state.fullname}
                    onChange={(e) => {
                      this.setState({ fullname: e.target.value });
                    }}
                  />
                </div>
                <p
                  className={`text-red-800 p-1 ${
                    this.state.fullname.length < 3 ? "" : "hidden"
                  }`}
                  style={{ fontSize: "13px" }}
                >
                  {this.state.errorResponse.fullname}
                </p>
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Username :
                </label>
                <input
                  type="text"
                  name="username"
                  className="bg-slate-50 border outline-slate-600  border-slate-500 text-gray-900 placeholder-slate-500 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
                <p
                  className={`text-red-800 p-1 ${
                    this.state.username.length < 6 ? "" : "hidden"
                  }`}
                  style={{ fontSize: "13px" }}
                >
                  {this.state.errorResponse.username}
                </p>
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email :
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-slate-50 border outline-slate-600  border-slate-500 text-gray-900 placeholder-slate-500 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <p
                  className={`text-red-800 p-1 ${
                    this.state.email.length < 12 ? "" : "hidden"
                  }`}
                  style={{ fontSize: "13px" }}
                >
                  {this.state.errorResponse.email}
                </p>
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Phone Number :
                </label>
                <input
                  type="text"
                  name="phone"
                  className="bg-slate-50 border outline-slate-600  border-slate-500 text-gray-900 placeholder-slate-500 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
                  placeholder="Phone Number"
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
                <p
                  className={`text-red-800 p-1 ${
                    this.state.phone.length < 9 ? "" : "hidden"
                  }`}
                  style={{ fontSize: "13px" }}
                >
                  {this.state.errorResponse.phone}
                </p>
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-700 ">
                  Password :
                </label>
                <input
                  type="password"
                  name="password"
                  className="bg-slate-50 border outline-slate-600  border-slate-500 text-gray-900 placeholder-slate-500 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <p
                  className={`text-red-800 p-1 ${
                    this.state.password.length < 6 ? "" : "hidden"
                  }`}
                  style={{ fontSize: "13px" }}
                  defaultValue
                >
                  {this.state.errorMsg ===
                    "Password or confirm password doest'n match." &&
                  this.state.password.length < 6
                    ? "Use between 6 - 16 characters"
                    : this.state.errorMsg}
                </p>
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-700 ">
                  Retype Password :
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="bg-slate-50 border outline-slate-600  border-slate-500 text-gray-900 placeholder-slate-500 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
                  placeholder="Retype Password"
                  value={this.state.confirmPassword}
                  onChange={(e) =>
                    this.setState({ confirmPassword: e.target.value })
                  }
                />
                <p
                  className={`text-red-800 p-1 ${
                    this.state.errorMsg === "Use between 6 - 16 characters" ||
                    this.state.errorMsg ===
                      "Password or confirm password doest'n match."
                      ? ""
                      : "hidden"
                  }`}
                  style={{ fontSize: "13px" }}
                >
                  {this.state.errorMsg ===
                  "Password or confirm password doest'n match."
                    ? this.state.errorMsg
                    : ""}
                </p>
              </div>
              <div className="mb-3">
                <span className="flex items-center text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    onChange={() =>
                      this.setState(
                        !this.state.checkBox
                          ? { checkBox: true }
                          : { checkBox: false }
                      )
                    }
                    className="bg-slate-50 border mr-1 outline-slate-600  border-slate-500 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block"
                  />
                  I agree to the
                  <a href="#" className="text-indigo-500">
                    &nbsp;terms and conditions.
                  </a>
                </span>
                <p
                  className={`text-red-800 p-1 ${
                    this.state.checkBox
                      ? "hidden"
                      : this.state.errorMsg.includes(
                          "Please Click I agree to the terms and conditions"
                        )
                      ? ""
                      : "hidden"
                  }`}
                  style={{ fontSize: "13px" }}
                >
                  {this.state.errorMsg}
                </p>
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className="inline-flex items-center h-10 px-4 py-2 leading-6 shadow rounded-xl text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 w-full justify-center"
                >
                  <svg
                    className={
                      this.state.setButton
                        ? "animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        : "animate-spin -ml-1 mr-3 h-5 w-5 text-white hidden"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {this.state.setButton ? "Success..." : "Sign Up"}
                </button>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700">
                  Have an account?
                  <Link
                    to="/accounts/login"
                    className="ml-1 hover:underline text-indigo-500"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
