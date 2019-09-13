import React from "react";

const SubmitBtn = ({ value }) => {
  return (
    <div className="submit-btn">
      <input type="submit" value={value} className="submit-btn__btn" />
    </div>
  );
};

export default SubmitBtn;
