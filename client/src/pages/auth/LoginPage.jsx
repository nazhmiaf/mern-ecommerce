import React from "react";
import FormAuth from "../../components/FormAuth";
import customAPI from "../../API/api";
import { toast } from "react-toastify";
import { useActionData } from "react-router-dom";
import { redirect } from "react-router-dom";
import { loginUser } from "../../features/userSlice";
import heroImage from "../../assets/images/HERO-MARKET.svg";
import heroImage2 from "../../assets/images/HERO-MARKET-2.svg";
import heroImage3 from "../../assets/images/HERO-MARKET-3.svg";

export const action =
  (store) =>
  async ({ request }) => {
    const formInput = await request.formData();
    const data = Object.fromEntries(formInput);

    try {
      const response = await customAPI.post("/auth/login", data);
      store.dispatch(loginUser(response.data));
      return redirect("/");
    } catch (error) {
      return {
        error: error.response?.data?.message,
      };
    }
  };

const LoginPage = () => {
  const actionData = useActionData();

  return (
    <div className="min-h-dvh bg-primary flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-10">
      
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full lg:w-1/2">
        <img
          className="w-40 sm:w-52 md:w-60 lg:w-64"
          src={heroImage}
          alt="Hero"
        />

        <div className="flex flex-row sm:flex-col gap-4 sm:gap-y-6">
          <img
            className="w-32 sm:w-44 md:w-52 lg:w-60"
            src={heroImage2}
            alt="Hero"
          />
          <img
            className="w-32 sm:w-44 md:w-52 lg:w-60"
            src={heroImage3}
            alt="Hero"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md">
        <FormAuth errorMessage={actionData?.error} />
      </div>
    </div>
  );
};

export default LoginPage;