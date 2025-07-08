import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "./hook/useAuth";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import FormProvider from "../../utils/FormProvider";
import { useSnackbar } from "notistack";

const defaultValues = {
  email: "",
  password: "",
};

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { loginUser } = useAuth();
  const [loginerror, setLoginerror] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((currentValue) => !currentValue);

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(loginSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      setLoginerror("");
      await loginUser(data);
      const token = localStorage.getItem("accessToken");
      if (token) {
        enqueueSnackbar("Login successful", { variant: "success" });
        navigate("/home");
      } else {
        setLoginerror("Invalid credentials");
        enqueueSnackbar("Login failed", { variant: "error" });
      }
    } catch (err) {
      console.error(err);
      enqueueSnackbar("error", { variant: "error" });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-100 to-emerald-700">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6">
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

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.password
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 focus:outline-none"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md"
              >
                Sign In
              </button>

              {loginerror && <p className="text-red-500">{loginerror}</p>}
              <p className="text-sm text-center">
                New User? Sign Up <Link to={"/register"}>here</Link>
              </p>
            </div>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default Login;
