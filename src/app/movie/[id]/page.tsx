"use client";

import Image from "next/image";
import React from "react";
import swr from "swr";

interface IProps {
  params: { [key: string]: string };
}

const fetcher = (...args: any) => {
  return fetch(args[0]).then((res) => res.json());
};

const MovieComponent: React.FC<IProps> = ({ params }) => {
  const movieId = params.id;
  const { data, error, isLoading } = swr(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
    fetcher
  );
  console.log(data);
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          data?.backdrop_path || data?.poster_path
        }`}
        alt="movie image"
        width={450}
        height={400}
        className="object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">{data?.original_title}</h2>
        <p>
          <strong>Overview:</strong> {data?.overview}
        </p>
        <span>
          <strong>Date released: </strong>
          {data?.release_date}
        </span>
        <span>
          <strong>Rating: </strong>
          {data?.vote_count}
        </span>
      </div>
    </div>
  );
};

export default MovieComponent;
