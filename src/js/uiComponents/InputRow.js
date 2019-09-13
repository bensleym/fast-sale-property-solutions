import React from "react";

const InputRow = ({ id, type, label, placeHolder }) => {
  return (
    <div className="input-row">
      <label htmlFor={id} className="input-row__label">
        {label}:
        <input
          id={id}
          type={type}
          placeholder={placeHolder}
          name={id}
          className="input-row__input"
        />
      </label>
    </div>
  );
};

export default InputRow;
