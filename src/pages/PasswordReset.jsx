import React, { useState } from "react";
import FirstBankLogo from "../assets/images/FirstBankLogo.jpg";
import { BiExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import PinInput from "../components/PinInput";
import { FgtPwd_URL, ResetPwd_URL } from "../utils/AllURLs";
import { Logger } from "../utils/logger";
import LoadingPage from "./LoadingPage";
import { apiCall } from "../utils/apiClient";
import toast from "react-hot-toast";

const PasswordReset = () => {
  const [completePin, setCompletePin] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePinChange = (newPin) => {
    setCompletePin(newPin);
  };

  const navigate = useNavigate();
  const arrow = (
    <svg width="10" height="10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
      </svg>
    </svg>
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    if (completePin.length < 6) {
      setErrorMessage("Pin should be at least 6 digits!");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    } else {
      let email = sessionStorage.getItem("userEmail") || "";
      setLoading(true);
      apiCall("post", `${ResetPwd_URL}`, {
        email: email,
        code: completePin,
      })
        .then((response) => {
          if (response) {
            if (response.status === 200) {
              toast.success("Password reset successfully!");
              navigate("/setNewPassword");
            } else {
              setCompletePin("");
              setErrorMessage(
                response.data || "Password reset request failed!"
              );
              setTimeout(() => {
                setErrorMessage("");
              }, 3000);
            }
          } else {
            setCompletePin("");
            setErrorMessage(response.data || "Password reset request failed!");
            setTimeout(() => {
              setErrorMessage("");
            }, 3000);
          }
        })
        .catch((err) => {
          Logger.error(err);
          setCompletePin("");
          setErrorMessage(
            err.title || err || "An error occurred while processing your request."
          );
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
        })
        .finally(() => setLoading(false));
    }
  };

  const resendRequest = async () => {
    let email = sessionStorage.getItem("userEmail") || '';
    setLoading(true);
    apiCall("post", `${FgtPwd_URL}`, {
      email: email,
    })
      .then((response) => {
        if (response) {
          if (response.status === 200) {
            toast.success(response.data || "Request sent successfully!");
          }
        } else {
          setErrorMessage(response.data || "Request failed!");
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
      {loading ? (
        <LoadingPage />
      ) : (
        <article className="flex h-screen flex-col lg:flex-row text-[#003B65] text-xs lg:text-sm">
          <div className="lg:w-1/2 lg:bg-[#033b63] hidden lg:block lg:relative">
            <img
              src={FirstBankLogo}
              className="w-[20%] bg-white p-4 absolute top-[40%] right-[40%] border-none"
            />
          </div>
          <div className="flex flex-col h-screen justify-center items-center lg:w-1/2">
            <h1 className="text-2xl lg:text-3xl">Password Reset</h1>
            <p className="py-1">We sent a code to {}</p>

            <section className="flex py-8">
              <PinInput
                length={6}
                onChange={handlePinChange}
                // onComplete={Logger.info(completePin)}
              />
            </section>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <button
              className="bg-[#d7bd14] px-32 py-3 my-3 md:my-5 md:px-40 md:py-4 rounded-2xl hover:bg-white hover:border hover:border-[#d7bd14] relative"
              onClick={handleSubmit}
            >
              Continue
            </button>

            <aside className="py-3 md:py-4">
              Didn&apos;t receive any mail?{" "}
              <span className="underline text-[#d7bd14]" onClick={resendRequest}>Click to resend</span>
            </aside>

            <aside className="flex flex-row gap-1 font-medium">
              <span className="mt-0.5 lg:mt-1">{arrow}</span>
              Back to{" "}
              <span
                className="text-[#d7bd14]"
                onClick={() => navigate("/login")}
              >
                log in
              </span>
            </aside>

            <span className="absolute p-2 bg-gray-100 rounded-md bottom-8 right-20">
              {<BiExit onClick={() => navigate("/")} />}
            </span>
          </div>
        </article>
      )}
    </>
  );
};

export default PasswordReset;
