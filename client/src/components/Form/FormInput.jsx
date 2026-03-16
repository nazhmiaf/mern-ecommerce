import React from "react";

const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <>
      <label htmlFor="" className="form-control">
        <label htmlFor="">
          <span className="label-text capitalize">{label}</span>
        </label>
        <input type={type} name={name} defaultValue={defaultValue} className="input input-bordered input-sm w-full" />
      </label>
    </>
  );
};

export default FormInput;
