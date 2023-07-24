import Image from "next/image";
import React from "react";

interface IProps {
  data: any;
}

const Card: React.FC<IProps> = ({ data }) => {
  return (
    <div className="cursor-pointer hover:shadow-slate-400 transition-shadow duration-300 border-2 rounded-md p-2 shadow-md border-solid border-gray-400">
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          data?.backdrop_path || data?.poster_path
        }`}
        alt="movie image"
        className="object-cover rounded-md"
        width={500}
        height={500}
        blurDataURL="/Spinner.svg"
      />
      <div className="truncate">
        {" "}
        <span>{data.overview}</span>{" "}
      </div>
      <h2 className="font-bold truncate"> {data?.original_title} </h2>
      <span> {data?.release_date} </span>
    </div>
  );
};

export default Card;
