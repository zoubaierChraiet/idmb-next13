import React from "react";
import Card from "../Card";
import Link from "next/link";

interface IProps {
  data: unknown[];
}

const MoviesList: React.FC<IProps> = ({ data = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto py-4 gap-2">
      {data.map((each: any) => {
        return (
          <Link key={each.id} href={`/movie/${each.id}`}>
            <Card data={each} />
          </Link>
        );
      })}
    </div>
  );
};

export default MoviesList;
