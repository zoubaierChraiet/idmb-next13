interface IProps {
  searchParams: { [key: string]: string };
}

const fetchResponse = async (genre: string) => {
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
  console.log(data);
  return <div>Home</div>;
};

export default Home;
