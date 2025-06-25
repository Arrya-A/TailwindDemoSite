import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

// const  location  = useLocation();
// You're trying to assign the whole object returned by useLocation() to a variable named location.
// {
//   pathname: "/login",
//   search: "",
//   hash: "",
//   state: null,
//   key: "randomKey"
// }
