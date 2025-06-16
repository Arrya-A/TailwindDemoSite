import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "./hook/useAuth";
import { useForm } from "react-hook-form";

const defaultValues = {
  email: "",
  password: "",
};

const loginSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const { loginUser } = useAuth();
  const [loginerror, setLoginerror] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    const { email, password } = data;
    const { success, token, message } = await loginUser({ email, password });

    if (success) {
      setLoginerror("");
      alert("Login successful");
      localStorage.setItem("accessToken", token);
      console.log("accessToken :", token);
      navigate("/home");
    } else {
      setLoginerror(message);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-100 to-emerald-700">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-semibold text-center text-emerald-500">
              Sign In
            </h2>
            <div>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 "
                placeholder="Enter your email"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 "
                placeholder="Enter your password"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition"
            >
              Sign In
            </button>
            {loginerror && <p className="text-red-500">{loginerror}</p>}
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
