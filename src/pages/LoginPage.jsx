import React from "react";
import FirstBankLogo from "../assets/images/FirstBankLogo.jpg";
import { BiExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Login_URL } from "../utils/AllURLs";
import { apiCall } from "../utils/apiClient";
import { Logger } from "../utils/logger";
import LoadingPage from "./LoadingPage";
import toast from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();

  const [isCheckBox, setCheckBox] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [loginID, setLoginID] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isloading, setLoading] = React.useState(false);

  const tickCheckBox = () => {
    setCheckBox(!isCheckBox);
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const eye = (
    <svg width="10" height="10" style={{ cursor: "pointer" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
      </svg>
    </svg>
  );
  const eyeSlash = (
    <svg width="10" height="10" style={{ cursor: "pointer" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" />
      </svg>
    </svg>
  );

  const tickBox = (
    <svg width="10" height="10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
      </svg>
    </svg>
  );
  const tickChecked = (
    <svg width="10" height="10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
      </svg>
    </svg>
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!loginID || !password) {
      setErrorMessage("Login ID and Password are required!");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }
    setLoading(true);
    apiCall("post", `${Login_URL}`, {
      userName: loginID,
      password: password,
    })
      .then((response) => {
        if (response) {
          if (response.status === 200) {
            toast.success("Login successful!");
            sessionStorage.setItem("authToken", response.data.token);
            sessionStorage.setItem("userEmail", response.data.email);
            sessionStorage.setItem("userId", response.data.$id);
            navigate("/");
          }
        } else {
          setErrorMessage(response.data || "Login failed!");
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
        }
      })
      .catch((err) => {
        Logger.error(err);
        setErrorMessage(
          err.title || "An error occurred while processing your request."
        );
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {isloading ? (
        <LoadingPage />
      ) : (
        <article className="flex w-full h-screen flex-col lg:flex-row text-[#003B65] text-xs lg:text-sm">
          <div className="md:w-1/2 lg:bg-[#033b63] hidden lg:block lg:relative">
            <img
              src={FirstBankLogo}
              className="w-[20%] p-4 bg-white absolute top-[40%] right-[40%] border-none"
            />
          </div>
          <div className="flex flex-col h-screen justify-center items-center lg:w-1/2">
            <h1 className="text-2xl lg:text-3xl">Login</h1>
            <p className="py-1">Welcome back!</p>

            <form className="py-4 gap-2" onSubmit={handleSubmit}>
              <label>
                Username
                <br></br>
                <input
                  className="border border-gray-200 bg-gray-100 pl-5 w-72 md:w-96 md:pl-5 py-3 mt-1 mb-2 md:py-4 rounded-md font-extralight focus:outline-none focus:bg-white"
                  placeholder="Enter your login ID"
                  type="text"
                  value={loginID}
                  onChange={(e) => setLoginID(e.target.value)}
                />
              </label>
              <br></br>
              <section className="relative">
                <label>
                  Password
                  <br></br>
                  <input
                    className="border border-gray-200 bg-gray-100 pl-5 w-72 md:w-96 md:pl-5 py-3 mt-1 mb-2 md:py-4 rounded-md font-extralight focus:outline-none focus:bg-white"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="absolute mt-5 md:mt-6 right-4 md:right-8"
                    onClick={togglePassword}
                  >
                    {showPassword ? eye : eyeSlash}
                  </span>
                </label>
              </section>
              <br></br>
              <section className="flex md:flex-row md:px-1 justify-between">
                <span className="flex mb-0.5" onClick={tickCheckBox}>
                  <span className="mr-1 lg:mt-1">
                    {isCheckBox ? tickChecked : tickBox}
                  </span>
                  Remember me
                </span>
                <p
                  className="underline"
                  onClick={() => navigate("/forgotPassword")}
                >
                  Forgot password?
                </p>
              </section>
              <br></br>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <button
                className="bg-[#d7bd14] px-32 py-3 mt-4 md:px-40 md:py-4 rounded-2xl hover:bg-white hover:border hover:border-[#d7bd14] relative"
                type="submit"
              >
                Log In
              </button>
            </form>

            <span className="absolute p-2 bg-gray-100 rounded-md bottom-8 right-20">
              {<BiExit onClick={() => navigate("/")} />}
            </span>
          </div>
        </article>
      )}
    </>
  );
};

export default LoginPage;
