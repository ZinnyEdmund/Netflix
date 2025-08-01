import "./watching.css";
import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../Tmdb";

const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
type Item = {
  id: string;
  title: string;
  // overview: string;
  poster_path: string;
};

const PopularMovies = () => {
  const [movies, setMovies] = useState<Item[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const popular = await fetchPopularMovies();
      setMovies(popular);
    };
    getMovies();
  }, []);

  return (
    <section>
      <div className="De_movieheader">
        <h1>Continue watching</h1>
      </div>
      <div className="movies-container">
        {movies.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`${TMDB_IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "200px" }}
              />
              <h3>{movie.title}</h3>
              {/* <p>{movie.overview.slice(0, 50)}</p> */}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default PopularMovies;
