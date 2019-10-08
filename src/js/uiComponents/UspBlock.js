import React from "react";

const UspBlock = ({ icon, children }) => {
  const cssClassName = `${icon} usp-block__icon`;
  return (
    <div className="usp-block">
      <span className={cssClassName}></span>
      {children}
    </div>
  );
};

export default UspBlock;
