import React from "react";

const FormHeader = ({ headerTitle }) => {
  return (
    <div className="form-header">
      <legend>{headerTitle}</legend>
    </div>
  );
};

export default FormHeader;
