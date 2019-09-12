import React from "react";

const InputRow = ({ id, type, label, placeHolder }) => {
  return (
    <div className="">
      <label htmlFor={id}>
        {label}:
        <input id={id} type={type} placeholder={placeHolder} name={id} />
      </label>
    </div>
  );
};

export default InputRow;
