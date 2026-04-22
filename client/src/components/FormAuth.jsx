import React from "react";
import { Form, Link } from "react-router-dom";
import FormInput from "./Form/FormInput";

const FormAuth = ({ isRegister, errorMessage }) => {
  return (
    <div className="">
      <Form
        method="POST"
        className="card w-96 p-7  bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h1 className="text-2xl font-bold text-center">
          {isRegister ? "Register" : "Login"}
        </h1>
        {isRegister && <FormInput type="text" name="Name" label="Username" />}
        <FormInput type="email" name="email" label="Email" />
        <FormInput type="password" name="password" label="Password" />
        {isRegister && (
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
          />
        )}
        {errorMessage && (
          <p className="text-red-500 text-sm -mt-2">{errorMessage}</p>
        )}
        <button type="submit" className="btn btn-primary mt-4">
          {isRegister ? "Register" : "Login"}
        </button>
        <p className="text-center">
          {isRegister ? "Already have an account?" : "Don't have an account?"}
          <Link
            to={isRegister ? "/login" : "/register"}
            className="ml-2 link link-hover transition-all duration-300 link-info"
          >
            {isRegister ? "Login" : "Register"}
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default FormAuth;
