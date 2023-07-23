"use client";

import React, { useEffect } from "react";

interface IProps {
  error: any;
  reset: any;
}

const ErrorComponent: React.FC<IProps> = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <span>ERROR OCCURED</span>
      <div />
      <button className="bg-green-500 rounded-sm p-1" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};

export default ErrorComponent;
