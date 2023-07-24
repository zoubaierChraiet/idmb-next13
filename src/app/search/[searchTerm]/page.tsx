import MoviesList from "@/components/MoviesList";
import React from "react";

interface IProps {
  params: { [key: string]: string };
}

const Search: React.FC<IProps> = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}`,
    { next: { revalidate: 30000 } }
  );

  if (!res.ok) throw new Error("failed to fetch data");

  const data = await res.json();

  return (
    <div>
      <MoviesList data={data.results || []} />
    </div>
  );
};

export default Search;
