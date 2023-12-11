import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{"height":"100vh"}}>
      <div class="lds-ring ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
