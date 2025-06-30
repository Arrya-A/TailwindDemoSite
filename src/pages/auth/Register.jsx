import { useForm } from "react-hook-form";
import FormProvider from "../../utils/FormProvider";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "./hook/useAuth";

const registerSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Confirm Password is required"),
  address: yup.string().required("Address is required"),
  country: yup.string().required("Country is required"),
  zipCode: yup.string().required("ZipCode is required"),
  vat: yup.string().required("vat is required"),
  idCode: yup.string().required("ID Code is required"),
  referral: yup.string().required("Referral is required"),
});

const Register = () => {
  const { registerUser } = useAuth();
  const methods = useForm({
    resolver: yupResolver(registerSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response= await registerUser(data);
      console.log(response);
      
    } catch (err) {
      console.log(err);
    }
  };
//  try {
//     const res = await registerUser(data);
//     if (res?.success) {
//       toast.success("Registration successful! Please log in.");
//       setTimeout(() => navigate("/login"), 2000); // Navigate after toast
//     } else {
//       toast.error("Registration failed. Please try again.");
//     }
//   } catch (err) {
//     console.log(err);
//     toast.error("An error occurred during registration.");
//   }
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-100 to-emerald-700 ">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6">
              <h2 className="text-emerald-500 text-2xl font-semibold text-center ">
                Sign Up
              </h2>
              <div>
                <input
                  type="text"
                  placeholder="Enter your username"
                  {...register("username")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.username
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                {errors.username && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>
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
              <div>
                <input
                  type="password"
                  placeholder="Confirm password"
                  {...register("confirmPassword")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.confirmPassword
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter your address"
                  {...register("address")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.address
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                {errors.address && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter your country"
                  {...register("country")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.country
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                {errors.country && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter your city"
                  {...register("city")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.city
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                {errors.city && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Zip Code"
                  {...register("zipCode")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.zipCode
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                {errors.zipCode && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.zipCode.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Vat Number"
                  {...register("vat")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.vat
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                {errors.vat && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.vat.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="ID Code"
                  {...register("idCode")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.idCode
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                {errors.idCode && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.idCode.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Referral"
                  {...register("referral")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.referral
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                {errors.referral && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.referral.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition"
              >
                Sign Up
              </button>
              <p className="text-sm text-center">
                Already a User?{" "}
                <Link to="/login" className="text-emerald-500 hover:underline">
                  Sign In here
                </Link>
              </p>
            </div>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Register;
