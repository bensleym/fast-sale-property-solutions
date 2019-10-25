import React from "react";

const SubmitBtn = ({ value, id }) => {
  return (
    <div className="submit-btn">
      <button id={id} className="submit-btn__btn">
        {value}
      </button>
    </div>
  );
};

export default SubmitBtn;
