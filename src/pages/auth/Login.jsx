import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "./hook/useAuth";
import { useForm } from "react-hook-form";
import { Bounce, toast, ToastContainer } from "react-toastify";

const defaultValues = {
  email: "",
  password: "",
};

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
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
      toast.success("Login successful");
      localStorage.setItem("accessToken", token);
      console.log("accessToken :", token);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
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
                placeholder="Enter your email"
                {...register("email")}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 ring-red-200"
                    : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-red-500 ring-red-200"
                    : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md "
            >
              Sign In
            </button>
            {loginerror && <p className="text-red-500">{loginerror}</p>}
            <p className="text-sm text-center">
              New User?
              <Link to="/register" className="text-emerald-500 hover:underline">
                Sign Up here
              </Link>
            </p>
          </form>

          <ToastContainer
            position="top-center"
            autoClose={3000}
            transition={Bounce}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
