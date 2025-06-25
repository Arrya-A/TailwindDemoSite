import axiosInstance from "../../../utils/AxiosInstance";

const useAuth = () => {
  const loginUser = async ({ email, password }) => {
    try {
      const { status, data } = await axiosInstance.post("/login", {
        email,
        password,
      });

      if (status === 200) {
        const { access_token } = data;
        return {
          success: true,
          token: access_token,
        };
      } else {
        return {
          success: false,
          message: data?.message || "Login failed",
        };
      }
    } catch (err) {
      console.error("login error", err);
      return {
        success: false,
        message:
          err?.response?.data?.message || err.message || "Login failed",
      };
    }
  };

  return { loginUser };
};

export default useAuth;
