import axiosInstance from "../../../utils/AxiosInstance";


const useAuth = () => {
  const loginUser = async ({ email, password }) => {
    try {
      const { status, data } = await axiosInstance.post("/login", {
        email,
        password,
      });
      if (status == 200) {
        const { access_token } = data;
        return {
          success: true,
          token: access_token,
        };
      }
    } catch (err) {
      console.log("login error", err);
      return {
        success: false,
        message: err?.message || "Login failed",
      };
    }
  };
  return { loginUser };
};

export default useAuth;
