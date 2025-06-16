import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-100 to-emerald-700">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <form className="space-y-6">
            <h2 className="text-2xl font-semibold text-center text-emerald-500">
              Sign In
            </h2>

            <div>

              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 "
                placeholder="Enter your email"
              />
            </div>

            <div>

              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 "
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition"
            >
              Sign In
            </button>

            <p className="text-sm text-center">
              New User?{" "}
              <Link to="/register" className="text-emerald-500 hover:underline">
                Sign Up here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
