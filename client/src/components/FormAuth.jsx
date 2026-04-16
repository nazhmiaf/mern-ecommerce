import React from "react";
import { Form } from "react-router-dom";
import FormInput from "./Form/FormInput";

const FormAuth = () => {
  return (
    <div className="min-h-dvh grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-7 bg-base-300 shadow-lg flex flex-col gap-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <FormInput type="email" name="Email" label="Email" />
        <FormInput type="password" name="Password" label="Password" />
      </Form>
    </div>
  );
};

export default FormAuth;
