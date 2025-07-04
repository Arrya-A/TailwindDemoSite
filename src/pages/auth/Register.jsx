import { useForm } from "react-hook-form";
import FormProvider from "../../utils/FormProvider";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "./hook/useAuth";
import { toast } from "react-toastify";

const registerSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  address: yup.string().required("Address is required"),
  country: yup.string().required("Country is required"),
  zipcode: yup.string().required("ZipCode is required"),
  vat_number: yup.string().required("vat is required"),
  id_code: yup.string().required("ID Code is required"),
  referral: yup.string().required("Referral is required"),
});

const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useAuth();
  const methods = useForm({
    resolver: yupResolver(registerSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (formData) => {
    try {
      const { data, status } = await registerUser(formData);
      console.log(data);
      if (status == 200) {
        toast.success("Registration successfull");
        navigate("/login");
      } else {
        toast.error("Registration failed. Please try again");
      }
    } catch (err) {
      console.log(err);
    }
  };
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
                  {...register("confirm_password")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.confirm_password
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                {errors.confirm_password && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
              {/* <div>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  {...register("date_of_birth")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.date_of_birth
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                {errors.date_of_birth && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.date_of_birth.message}
                  </p>
                )}
              </div> */}
              <div>
                <input
                  type="text"
                  placeholder="gender"
                  {...register("gender")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.gender
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                {errors.gender && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.gender.message}
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
                  {...register("zipcode")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.zipcode
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                {errors.zipcode && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.zipcode.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Vat Number"
                  {...register("vat_number")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.vat_number
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                {errors.vat_number && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.vat_number.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="ID Code"
                  {...register("id_code")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.id_code
                      ? "border-red-500 ring-red-200"
                      : "border-gray-300"
                  }`}
                />
                {errors.id_code && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.id_code.message}
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
