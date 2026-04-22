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
    <div className="min-h-dvh bg-primary flex items-center justify-evenly gap-x-20 flex-col lg:flex-row">
      <div className="flex items-center justify-between gap-5" >
        <img className="w-64" src={heroImage} alt="Hero" />
        <div className="flex flex-col gap-y-10">
          <img className="w-60" src={heroImage2} alt="Hero" />
          <img className="w-60" src={heroImage3} alt="Hero" />
        </div>
      </div>
      <FormAuth isRegister={true} errorMessage={actionData?.error} />
    </div>
  );
};

export default LoginPage;
