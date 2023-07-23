import Image from "next/image";
import React from "react";

interface IProps {}

const LoadingComponent: React.FC<IProps> = (props) => {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <Image src="Spinner.svg" alt="Spinner image" width={100} height={100} />
    </div>
  );
};

export default LoadingComponent;
