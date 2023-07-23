import MoviesList from "@/components/MoviesList";

interface IProps {
  searchParams: { [key: string]: string };
}

const fetchResponse = async (genre: string) => {
  setTimeout(() => {}, 5000);
  const response = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 30000 } }
  );
  return response;
};

const Home: React.FC<IProps> = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";
  const response = await fetchResponse(genre);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return (
    <div>
      <MoviesList data={data.results || []} />
    </div>
  );
};

export default Home;
