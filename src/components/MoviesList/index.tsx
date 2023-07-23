import React from "react";

interface IProps {
  data: unknown[];
}

const MoviesList: React.FC<IProps> = ({ data = [] }) => {
  return (
    <div>
      {data.map((each: any) => {
        return <div key={each.title}>{each.title}</div>;
      })}
    </div>
  );
};

export default MoviesList;
