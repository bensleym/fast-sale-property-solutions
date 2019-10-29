import React from "react";

const SubmitBtn = ({ value, id }) => {
  return (
    <div className="submit-btn">
      <button id={id} className="submit-btn__btn">
        <span
          id="sendingSpinner"
          className="fas fa-spinner fa-spin submit-btn__btn--no-send"
        ></span>
        {value}
      </button>
    </div>
  );
};

export default SubmitBtn;
