import { Children, useEffect, useState } from "react";
import "./indexs.css";



/*
const containerStyle = {
  display: "flex",
  alignitems: "center",
  gap: "10px",
};

const starContsinerStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lightHight: "0",
  margin: "0",
};

export default function StartRating() {
  return (
    <div style={containerStyle}>
      <div style={starContsinerStyle}>
        {Array.from({ length: 5 }, (_, i) => (
          <span>Star{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
*/
/*
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "4f6ed6e4";

export default function App() {
  const [query, SetQuery] = useState("Matrix");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const tempQuery = "Matrix";

  useEffect(function () {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${tempQuery}`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        setMovies(data.Search);
        console.log(data);
      } catch (err) {
        console.error(err.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <Header>
        <Logo />
        <Query query={query} SetQuery={SetQuery} />
        <NumLength movies={movies} />
      </Header>

      <Main>
        <Box>
          {isLoading ? <Loader /> : <Movies movies={movies} />}

          {isLoading && <Loader />}
          {!isLoading && !error && <Movies movies={movies} />}
          {error && <ErrorMessage error={error} />}
        </Box>

        <Box>
          <AvgWatched watched={watched} />

          <Watched watched={watched} />
        </Box>
      </Main>
    </>
  );
}

function Loader() {
  return <div className="loader">Loading...</div>;
}

function ErrorMessage({ error }) {
  return (
    <p className="error">
      <span>⛔</span> {error}
    </p>
  );
}

function Header({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

function Main({ children }) {
  return <div style={{ display: "flex" }}>{children}</div>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const styleDiv = {
    display: "block",
    marginTop: "30px",
    width: "300px",
    background: "purple",
    padding: "15px 20px",
    marginRight: "20px",
  };

  const divTwo = {
    fontSize: "25px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
  };

  return (
    <span style={styleDiv}>
      <div>
        <span onClick={() => setIsOpen((open) => !open)} style={divTwo}>
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div> {isOpen && children}</div>
    </span>
  );
}

function Movies({ movies, handleShow }) {
  return (
    <div>
      <div>
        {movies.map((movie) => (
          <div
            onClick={() => handleShow(movie)}
            key={movie.imdbID}
            style={{ display: "flex", marginBottom: "15px" }}
          >
            <div>
              <img
                style={{ width: "20px" }}
                src={movie.Poster}
                alt={movie.imdbID}
              />
            </div>
            <div>
              <p>{movie.Title}</p>
              <p>📅 {movie.Year} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h2>🍿 usepopcorn</h2>
    </div>
  );
}

function Query({ query, SetQuery }) {
  return (
    <div>
      <input
        value={query}
        onChange={(e) => SetQuery(e.target.value)}
        type="text"
        placeholder="Search movies..."
      />
    </div>
  );
}

function NumLength({ movies }) {
  return (
    <div>
      <div>Found {movies.length} results</div>
    </div>
  );
}

function AvgWatched({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div style={{ display: "block" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3>MOVIES YOU WATCHED</h3>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <div>⭐ {watched.length} movies</div>
        <div>🌟{avgImdbRating} </div>
        <div>⭐ {avgUserRating} </div>
        <div>⏳ {avgRuntime} </div>
        <div></div>
      </div>
    </div>
  );
}

function Watched({ watched, handleDelete }) {
  return (
    <div>
      <div>
        {watched.map((watchedMovie) => (
          <div key={watchedMovie.imdbID} style={{ display: "flex" }}>
            <div>
              <img
                style={{ width: "50px", marginRight: "10px" }}
                src={watchedMovie.Poster}
                alt={watchedMovie.name}
              />
            </div>
            <div>
              <div>{watchedMovie.Title}</div>
              <div
                style={{
                  width: "50px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>⭐ {watchedMovie.imdbRating} </div>
                <p>🌟 {watchedMovie.userRating} </p>
                <p> ⏳ {watchedMovie.runtime} </p>
                <button onClick={() => handleDelete(watchedMovie.imdbID)}>
                  ❌
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
*/
/*

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "4f6ed6e4";

export default function App() {
  const [query, SetQuery] = useState("Matrix");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
 

 

  return (
    <>
      <Header>
        <Logo />
        <Query query={query} SetQuery={SetQuery} />
        <NumLength movies={movies} />
      </Header>

      <Main>
        <Box>
         <Movies movies={movies} />

         
        </Box>

        <Box>
          <AvgWatched watched={watched} />

          <Watched watched={watched} />
        </Box>
      </Main>
    </>
  );
}

function Header({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

function Main({ children }) {
  return <div style={{ display: "flex" }}>{children}</div>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const styleDiv = {
    display: "block",
    marginTop: "30px",
    width: "300px",
    background: "purple",
    padding: "15px 20px",
    marginRight: "20px",
  };

  const divTwo = {
    fontSize: "25px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
  };

  return (
    <span style={styleDiv}>
      <div>
        <span onClick={() => setIsOpen((open) => !open)} style={divTwo}>
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div> {isOpen && children}</div>
    </span>
  );
}

function Movies({ movies, handleShow }) {
  return (
    <div>
      <div>
        {movies.map((movie) => (
          <div
            onClick={() => handleShow(movie)}
            key={movie.imdbID}
            style={{ display: "flex", marginBottom: "15px" }}
          >
            <div>
              <img
                style={{ width: "20px" }}
                src={movie.Poster}
                alt={movie.imdbID}
              />
            </div>
            <div>
              <p>{movie.Title}</p>
              <p>📅 {movie.Year} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h2>🍿 usepopcorn</h2>
    </div>
  );
}

function Query({ query, SetQuery }) {
  return (
    <div>
      <input
        value={query}
        onChange={(e) => SetQuery(e.target.value)}
        type="text"
        placeholder="Search movies..."
      />
    </div>
  );
}

function NumLength({ movies }) {
  return (
    <div>
      <div>Found {movies.length} results</div>
    </div>
  );
}

function AvgWatched({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div style={{ display: "block" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3>MOVIES YOU WATCHED</h3>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <div>⭐ {watched.length} movies</div>
        <div>🌟{avgImdbRating} </div>
        <div>⭐ {avgUserRating} </div>
        <div>⏳ {avgRuntime} </div>
        <div></div>
      </div>
    </div>
  );
}

function Watched({ watched, handleDelete }) {
  return (
    <div>
      <div>
        {watched.map((watchedMovie) => (
          <div key={watchedMovie.imdbID} style={{ display: "flex" }}>
            <div>
              <img
                style={{ width: "50px", marginRight: "10px" }}
                src={watchedMovie.Poster}
                alt={watchedMovie.name}
              />
            </div>
            <div>
              <div>{watchedMovie.Title}</div>
              <div
                style={{
                  width: "50px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>⭐ {watchedMovie.imdbRating} </div>
                <p>🌟 {watchedMovie.userRating} </p>
                <p> ⏳ {watchedMovie.runtime} </p>
                <button onClick={() => handleDelete(watchedMovie.imdbID)}>
                  ❌
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

*/



const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "4f6ed6e4";

export default function App() {
  const [query, SetQuery] = useState("Matrix");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState({});

  const [error, setError] = useState("");

  function handleSelectedId(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddMovie(movie) {
    setWatched((watch) => [...watch, movie]);
    setSelectedId(null);
  }

  
  useEffect(function () {
    console.log("A");
  }, []);

  useEffect(function () {
    console.log("B");
  });

  console.log("C");

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsloading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsloading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();
    },
    [query]
  );

  return (
    <div>
      <>
        <Header>
          <Logo />
          <Query query={query} SetQuery={SetQuery} />
          <NumLength movies={movies} />
        </Header>

        <Main>
          <Box>
            {isLoading ? <Loader /> : <Movies movies={movies} />}
            {isLoading && <Loader />}
            {!isLoading && !error && (
              <Movies movies={movies} onSelectedId={handleSelectedId} />
            )}
            {error && <Error message={error} />}
          </Box>

          <Box>
            {selectedId ? (
              <SelectedMovieDetails
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                setSelectedMovie={setSelectedMovie}
                selectedMovie={selectedMovie}
                onCloseMovie={handleCloseMovie}
                handleAddMovie={handleAddMovie}
              />
            ) : (
              <>
                <AvgWatched watched={watched} />
                <Watched watched={watched} />
              </>
            )}
          </Box>
        </Main>
      </>
    </div>
  );
}

function SelectedMovieDetails({
  selectedId,
  setSelectedMovie,
  selectedMovie,
  onCloseMovie,
  handleAddMovie,
}) {
  const [userRating, setUserRating] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const {
    Title: title,
    Poster: poster,
    Actors: actors,
    Director: director,
    Released: released,
    Runtime: runtime,
    Genre: genre,
    imdbRating,
    Plot: plot,
  } = selectedMovie;

  const newObject = {
    poster,
    title,
    imdbID: selectedId,
    imdbRating: Number(imdbRating),
    runtime,
    userRating,
  };

  console.log(newObject);

  useEffect(
    function () {
      async function getSelectedMovieDetails() {
        //setSelectedId(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );

        const data = await res.json();
        setSelectedMovie(data);
        console.log(data);
        //setSelectedId(false);
      }
      getSelectedMovieDetails();
    },
    [selectedId]
  );

  const posterDiv = { display: "flex" };
  const posterStyle = { width: "90px" };

  return (
    <div>
      <>
        <button onClick={onCloseMovie}>&larr;</button>

        <div style={posterDiv}>
          <div>
            <img style={posterStyle} src={poster} alt={poster} />
          </div>

          <div>
            <h1>{title}</h1>
            <h3>
              {released} {runtime}
            </h3>

            <h3>{genre}</h3>

            <p>{imdbRating}⭐ IMDb rating</p>
          </div>
        </div>

          <StarRating
            setUserRating={setUserRating}
            onAddMovie={() => handleAddMovie(newObject)}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        

        <div>{plot}</div>

        <p>Starring {actors}</p>

        <p>Directed by {director} </p>
      </>
    </div>
  );
}

function StarRating({ onAddMovie, setUserRating, isOpen, setIsOpen }) {
  const [count, setCount] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleCount(count) {
    setCount(count);
    setIsOpen(true);
    setUserRating(count);
  }

  const starStyle = {
    display: "flex",
    alignItems: "center",
    margin: "20px 0px",
  };

  return (
    <div>
      <div style={starStyle}>
        {Array.from({ length: 10 }, (_, i) => (
          <Star
            key={i}
            color="yellow"
            onSetCount={() => handleCount(i + 1)}
            full={tempRating ? tempRating >= i + 1 : count >= i + 1}
            onMouseEnter={() => setTempRating(i + 1)}
            onMouseLeave={() => setTempRating(0)}
          />
        ))}
        <p>{tempRating ? tempRating : count}</p>
      </div>

      {isOpen && <button onClick={onAddMovie}>+ Add to List</button>}
    </div>
  );
}

function Star({ full, color, onSetCount, onMouseEnter, onMouseLeave }) {
  const star = { width: "18px" };

  return (
    <span
      style={star}
      onClick={onSetCount}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

function Error({ message }) {
  return (
    <p>
      <span>⛔</span> {message}
    </p>
  );
}

function Loader() {
  return <p>Loading...</p>;
}

function Header({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

function Main({ children }) {
  return <div style={{ display: "flex" }}>{children}</div>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const styleDiv = {
    display: "block",
    marginTop: "30px",
    width: "300px",
    background: "purple",
    padding: "15px 20px",
    marginRight: "20px",
  };

  const divTwo = {
    fontSize: "25px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
  };

  return (
    <span style={styleDiv}>
      <div>
        <span onClick={() => setIsOpen((open) => !open)} style={divTwo}>
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div> {isOpen && children}</div>
    </span>
  );
}

function Movies({ movies, onSelectedId }) {
  return (
    <div>
      <div>
        {movies.map((movie) => (
          <div
            onClick={() => onSelectedId(movie.imdbID)}
            key={movie.imdbID}
            style={{ display: "flex", marginBottom: "15px" }}
          >
            <div>
              <img
                style={{ width: "20px" }}
                src={movie.Poster}
                alt={movie.imdbID}
              />
            </div>
            <div>
              <p>{movie.Title}</p>
              <p>📅 {movie.Year} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h2>🍿 usepopcorn</h2>
    </div>
  );
}

function Query({ query, SetQuery }) {
  return (
    <div>
      <input
        value={query}
        onChange={(e) => SetQuery(e.target.value)}
        type="text"
        placeholder="Search movies..."
      />
    </div>
  );
}

function NumLength({ movies }) {
  return (
    <div>
      <div>Found {movies.length} results</div>
    </div>
  );
}

function AvgWatched({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div style={{ display: "block" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3>MOVIES YOU WATCHED</h3>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <div>⭐ {watched.length} movies</div>
        <div>🌟{avgImdbRating.toFixed(2)} </div>
        <div>⭐ {avgUserRating} </div>
        <div>⏳ {avgRuntime} </div>
        <div></div>
      </div>
    </div>
  );
}

function Watched({ watched, handleDelete }) {
  return (
    <div>
      <div>
        {watched.map((watchedMovie) => (
          <div key={watchedMovie.imdbID} style={{ display: "flex" }}>
            <div>
              <img
                style={{ width: "50px", marginRight: "10px" }}
                src={watchedMovie.poster}
                alt={watchedMovie.name}
              />
            </div>
            <div>
              <div>{watchedMovie.title}</div>
              <div
                style={{
                  width: "50px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>⭐ {watchedMovie.imdbRating} </div>
                <p>🌟 {watchedMovie.userRating} </p>
                <p> ⏳ {watchedMovie.runtime} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}













/*
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "4f6ed6e4";

export default function App() {
  const [query, SetQuery] = useState("Matrix");
  const [movies, setMovies] = useState([]);
  const [isSelected, setIsSelected] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsloading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState("");

  const tempQuery = "interstellar";

  function handleShow(movies) {
    setIsSelected(movies);
    setIsShow(true);
  }

  function handleAdditem(movie) {
    setWatched((watched) => [...watched, movie]);
    setIsShow(false);
  }

  function handleDelete(id) {
    setWatched((watched) => watched.filter((watch) => watch.id !== id));
  }

  /*
  useEffect(function () {
    console.log("A");
  }, []);

  useEffect(function () {
    console.log("B");
  });

  console.log("C");

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsloading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsloading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();
    },
    [query]
  );

  return (
    <div>
      <>
        <Header>
          <Logo />
          <Query query={query} SetQuery={SetQuery} />
          <NumLength movies={movies} />
        </Header>

        <Main>
          <Box>
            {/*{isLoading ? <Loader /> : <Movies movies={movies} />}}
            {isLoading && <Loader />}
            {!isLoading && !error && (
              <Movies movies={movies} handleShow={handleShow} />
            )}
            {error && <Error message={error} />}
          </Box>

          <Box>
            {isShow && <Arrow setIsShow={setIsShow} />}

            {isShow ? (
              <IsSelected
                isSelected={isSelected}
                handleAddList={handleAdditem}
              />
            ) : (
              <AvgWatched watched={watched} />
            )}

            {!isShow && (
              <Watched watched={watched} handleDelete={handleDelete} />
            )}
          </Box>
        </Main>
      </>
    </div>
  );
}

function IsSelected({ isSelected, handleAddList }) {
  const isSelectedStyle = { display: "" };
  const image = { width: "230px" };

  return (
    <div style={isSelectedStyle}>
      <div>
        <img style={image} alt={isSelected.Title} src={isSelected.Poster} />
      </div>
      <div>
        <p>{isSelected.Title}</p>
        <p>📅 {isSelected.Year}</p>
        <p>{isSelected.Type}</p>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        {Array.from({ length: 10 }, (_, i) => (
          <Star color="orange" />
        ))}
      </div>

      <button onClick={() => handleAddList(isSelected)}>
        Add to Watchlist
      </button>
    </div>
  );
}

function Star({ full, color }) {
  const starDiv = { width: "10px" };

  return (
    <span style={starDiv}>
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

function Error({ message }) {
  return (
    <p>
      <span>⛔</span> {message}
    </p>
  );
}

function Loader() {
  return <p>Loading...</p>;
}

function Header({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

function Arrow({ setIsShow }) {
  const arrowDiv = {
    marginButtom: "20px",
    cursor: "pointer",
    fontSize: "15px",
  };

  return (
    <span onClick={() => setIsShow(false)} style={arrowDiv}>
      🔙
    </span>
  );
}

function Main({ children }) {
  return <div style={{ display: "flex" }}>{children}</div>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const styleDiv = {
    display: "block",
    marginTop: "30px",
    width: "300px",
    background: "purple",
    padding: "15px 20px",
    marginRight: "20px",
  };

  const divTwo = {
    fontSize: "25px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
  };

  return (
    <span style={styleDiv}>
      <div>
        <span onClick={() => setIsOpen((open) => !open)} style={divTwo}>
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div> {isOpen && children}</div>
    </span>
  );
}

function Movies({ movies, handleShow }) {
  return (
    <div>
      <div>
        {movies.map((movie) => (
          <div
            onClick={() => handleShow(movie)}
            key={movie.imdbID}
            style={{ display: "flex", marginBottom: "15px" }}
          >
            <div>
              <img
                style={{ width: "20px" }}
                src={movie.Poster}
                alt={movie.imdbID}
              />
            </div>
            <div>
              <p>{movie.Title}</p>
              <p>📅 {movie.Year} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h2>🍿 usepopcorn</h2>
    </div>
  );
}

function Query({ query, SetQuery }) {
  return (
    <div>
      <input
        value={query}
        onChange={(e) => SetQuery(e.target.value)}
        type="text"
        placeholder="Search movies..."
      />
    </div>
  );
}

function NumLength({ movies }) {
  return (
    <div>
      <div>Found {movies.length} results</div>
    </div>
  );
}

function AvgWatched({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div style={{ display: "block" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3>MOVIES YOU WATCHED</h3>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <div>⭐ {watched.length} movies</div>
        <div>🌟{avgImdbRating} </div>
        <div>⭐ {avgUserRating} </div>
        <div>⏳ {avgRuntime} </div>
        <div></div>
      </div>
    </div>
  );
}

function Watched({ watched, handleDelete }) {
  return (
    <div>
      <div>
        {watched.map((watchedMovie) => (
          <div key={watchedMovie.imdbID} style={{ display: "flex" }}>
            <div>
              <img
                style={{ width: "50px", marginRight: "10px" }}
                src={watchedMovie.Poster}
                alt={watchedMovie.name}
              />
            </div>
            <div>
              <div>{watchedMovie.Title}</div>
              <div
                style={{
                  width: "50px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>⭐ {watchedMovie.imdbRating} </div>
                <p>🌟 {watchedMovie.userRating} </p>
                <p> ⏳ {watchedMovie.runtime} </p>
                <button onClick={() => handleDelete(watchedMovie.imdbID)}>
                  ❌
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>

      <main className="main">
        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? "–" : "+"}
          </button>
          {isOpen1 && (
            <ul className="list">
              {movies?.map((movie) => (
                <li key={movie.imdbID}>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>🗓</span>
                      <span>{movie.Year}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? "–" : "+"}
          </button>
          {isOpen2 && (
            <>
              <div className="summary">
                <h2>Movies you watched</h2>
                <div>
                  <p>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                  </p>
                  <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                  </p>
                </div>
              </div>

              <ul className="list">
                {watched.map((movie) => (
                  <li key={movie.imdbID}>
                    <img src={movie.Poster} alt={`${movie.Title} poster`} />
                    <h3>{movie.Title}</h3>
                    <div>
                      <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </>
  );
}
*/

/*
const moviesTitles = [
  {
    id: crypto.randomUUID(),
    image:
      "https://th.bing.com/th/id/R.7d82d780b0679dba7737c24246e50818?rik=b2HcjJxLhtY3MA&pid=ImgRaw&r=0",
    movieName: "Inception",
    movieDate: "10 Oct 2010",
    actors: "Leonsdo DiCeaprio, Joseph Garden-Levit, Eliot Page",
    director: " Chritopher Notan",
    genere: "Action, Sci-Fi, ",
    ratingCount: "6.8",
    ratingStar: "⭐",
    movieIntro:
      " A thief sho steals corprate secerets through the use of dream-staring technology is given the inverse task of planting an ided into thr mind of a C.E.O, but his tragic project and his team to disaster.",
  },
  {
    id: crypto.randomUUID(),
    image:
      "https://th.bing.com/th/id/OIP.mCr3x90hubrByxx2xp21EwHaLH?rs=1&pid=ImgDetMain",
    movieName: "The Matrix",
    movieDate: "20 Jan 1999",
    actors: "Keenu Reeves, John Doe, Frank Cage",
    director: "Jonny Cage",
    runTime: "160",
    genere: "Epic, Sci-Fi, Action ",
    ratingCount: "9.8",
    ratingStar: "⭐⭐",
    movieIntro:
      "The metrix is like life simulation that potrays real life human existence in the world programm, codes and algorythms but the Sci-Fi move is breathe taking movie and must watch.",
  },
  {
    id: crypto.randomUUID(),
    image:
      "https://th.bing.com/th/id/R.df775520e903421ec79152bc4a44575d?rik=Jf7uZxJcuZL19g&pid=ImgRaw&r=0",
    movieName: "Parasite",
    movieDate: "16 Jul 2019",
    actors: "Dick King, Samson Inu Onwukwe Michael",
    director: "Chinchilar Groot",
    runTime: "120",
    genere: "Action, Sci-Fi, Adventure ",
    ratingCount: "8.8",
    ratingStar: "⭐⭐⭐",
    movieIntro:
      "A parasite hit the streets of Tokyo and if affected almost half of the population and wiped out the enter exictence and it became a global pandemic that raged for 20 years and lingered and no cure has been found only one young girl can save the human race.",
  },
];

function App() {
  const [movies, setMovies] = useState(moviesTitles);
  const [isSelected, setIsSelected] = useState(null);

  const [movieName, setMovieName] = useState("");

  function onClickMovie(movie) {
    setIsSelected(movie);
    console.log(isSelected);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSelected(null);
  }

  return (
    <div>
      <Header movieName={movieName} setMovieName={setMovieName} />

      <div style={{ display: "flex", padding: "20px" }}>
        <div
          style={{
            background: "darkgray",
            width: "300px",
            marginRight: "20px",
            paddingLeft: "20px",
          }}
        >
          <MoviesLayout movies={movies} onClickMovie={onClickMovie} />
        </div>

        {isSelected ? (
          <div>
            <WatchedMovies
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              handleSubmit={handleSubmit}
            />
          </div>
        ) : (
          <AlreadyWatched
            setIsSelected={setIsSelected}
            isSelected={isSelected}
            movies={movies}
          />
        )}
      </div>
    </div>
  );
}

function Header({ movieName, setMovieName }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "darkorange",
      }}
    >
      <div>usePopcorn</div>
      <div>
        <input
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          type="text"
          placeholder="Search movies..."
        />
      </div>
      <div>found X results</div>
    </div>
  );
}

function MoviesLayout({ movies, onClickMovie }) {
  const [moviesClose, setMoviesClose] = useState(true);

  return (
    <div>
      <div
        onClick={() => setMoviesClose((is) => !is)}
        style={{ cursor: "pointer", marginLeft: "230px", fontSize: "25px" }}
      >
        {moviesClose ? "-" : "+"}
      </div>

      {moviesClose && (
        <div>
          {movies?.map((movie) => (
            <Movies
              movie={movie}
              key={movie.name}
              onClickMovie={onClickMovie}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Movies({ movie, onClickMovie }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div onClick={() => onClickMovie(movie)}>
          <img
            style={{ width: "30px", height: "40px" }}
            src={movie.image}
            alt={movie.name}
          />
        </div>
        <div>
          <p>{movie.movieName}</p>

          <p>📆 {movie.movieDate}</p>
        </div>
      </div>
    </div>
  );
}

function WatchedMovies({ isSelected, setIsSelected, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      {isSelected && (
        <div
          style={{ width: "300px", height: "500px", background: "darkorange" }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <div>
              <img
                style={{ width: "100px", height: "150px" }}
                src={isSelected.image}
                alt={isSelected.name}
              />
            </div>

            <div style={{ margin: "0px 40px" }}>
              <p>{isSelected.movieName}</p>

              <p>
                {isSelected.movieDate} - {isSelected.runTime} min
              </p>

              <p>{isSelected.genere}</p>

              <p>
                {isSelected.ratingStar} {isSelected.ratingCount} IMBC rating
              </p>
            </div>

            <div
              onClick={() => setIsSelected(null)}
              style={{ cursor: "pointer", fontSize: "25px" }}
            >
              -
            </div>
          </div>
          <p>{isSelected.ratingStar} </p>
          <div>
            <p>{isSelected.movieIntro}</p>
            <p>Staring {isSelected.actors} </p>
            <p>Directed by {isSelected.director} </p>
          </div>
          <button>Add to cart</button>
        </div>
      )}
    </form>
  );
}

function AlreadyWatched({ setIsSelected, isSelected, movies }) {
  //const Selected = isSelected.id === movies.id;
  return (
    <div>
      {isSelected ? null : (
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "80px" }}>MOVIES YOU WATCHED</div>
            <div
              onClick={() => setIsSelected(null)}
              style={{ cursor: "pointer" }}
            >
              -
            </div>
          </div>

          <div>
            <div>
              <img src={isSelected} alt={isSelected} />
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

/*
function App() {
  const [open, setIsopen] = useState(false);
  const [openTwo, setIsopenTwo] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Accordion
          id="01"
          name="Where are these chair's assembled"
          text="This chair's are made in China but assembled in Nigeria by Innoson company"
          open={open}
          setIsopen={setIsopen}
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Accordion
          setIsopen={setIsopenTwo}
          id="02"
          name="How long do I have to return my chair"
          text="You have a week to return each chair if not you will pay for over due and a fine will be charged in your credit card"
        />
      </div>
    </div>
  );
}

function Accordion({ id, name, text, open, setIsopen }) {
  return (
    <div
      style={{
        border: "1px solid  white ",
        padding: "5px 20px 40px 20px ",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <p>{id} </p>
        <p style={{ margin: "0px 15px" }}>{name} </p>
        <p onClick={() => setIsopen((is) => !is)} style={{ cursor: "pointer" }}>
          -
        </p>
      </div>

      {open && <div style={{ width: "400px" }}>{text} </div>}
    </div>
  );
}

function App() {
  const [items, setItems] = useState([]);

  function handleAdditem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, toggle: !item.toggle } : item
      )
    );
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm("Are sure you want to clear your list");
    if (confirmed) setItems([]);
  }

  return (
    <>
      <Header />
      <Form handleAdditem={handleAdditem} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        handleClearList={handleClearList}
      />

      <Footer items={items} />
    </>
  );
}

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <p>WORLD TOUR</p>
      </header>
    </div>
  );
}

function Form({ handleAdditem }) {
  const [quantity, setQuantity] = useState(1);
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!quantity || !input) return;

    const newItem = { id: crypto.randomUUID(), quantity, input, toggle: false };
    handleAdditem(newItem);
    setQuantity(1);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>What do you need for your trip?</p>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add item..."
      />

      <button>ADD</button>
    </form>
  );
}

function PackingList({ items, handleDelete, handleToggle, handleClearList }) {
  const [isSorted, setiSorted] = useState("input");
  let sortedItems;

  if (isSorted === "input") sortedItems = items;

  if (isSorted === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (isSorted === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.toggle) - Number(b.toggle));

  return (
    <div>
      {sortedItems.map((item) => (
        <Items
          item={item}
          key={item.id}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}

      <div>
        <select value={isSorted} onChange={(e) => setiSorted(e.target.value)}>
          <option value="input">INPUT</option>
          <option value="description">DESCRIPTION</option>
          <option value="packed">PACKED</option>
        </select>
        <button onClick={() => handleClearList()}>CLEAR LIST</button>
      </div>
    </div>
  );
}

function Items({ item, handleDelete, handleToggle }) {
  return (
    <li style={{ display: "flex", alignItems: "center" }}>
      <input onClick={() => handleToggle(item.id)} type="checkbox" />
      <p>{item.quantity}</p>
      <p style={item.toggle ? { textDecoration: "line-through" } : {}}>
        {item.input}
      </p>

      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </li>
  );
}

function Footer({ items }) {
  if (!items) return <p>Start adding some items on your list</p>;

  const length = items.length;
  const packed = items.filter((item) => item.toggle).length;
  const percentage = Math.round((packed / length) * 100);

  if (percentage === 100) return <p>You are all set to go</p>;

  return (
    <p>
      You have {length} items(s) on your list and you already packed
      {packed} items ({percentage}%)
    </p>
  );
}
*/
