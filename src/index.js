import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster: "https://i.pravatar.cc/48?u=118836",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster: "https://i.pravatar.cc/48?u=118836",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster: "https://i.pravatar.cc/48?u=118836",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster: "https://i.pravatar.cc/48?u=118836",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
];

const tempMovieDetails = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Released: "Nov 20th, 2010",
    Genre: "Sci-Fi, Adventure",
    Poster: "https://i.pravatar.cc/48?u=118836",
    runtime: 120,
    imdbRating: 9.5,
    userRating: 9,
    Director: "Homes Dooh",
    Actors: "James Worth, Dickson Inmb",
    Plot: "In a world of cutthroat a tyrant Drug Lord in Mexico amased a great wealth through Drug smuglling and Child Trafficking and He has been in hinding for over 8 years and the F.B.I has Him on there most wanted list, He got busted throung His Son Jurez",
  },
  {
    imdbID: "tt0133093",
    Title: "Matrix",
    Poster: "https://i.pravatar.cc/48?u=118836",
    Released: "Jan 15th, 2020",
    Genre: "Action, Adventure",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
    Plot: "In a world of Science a great Scientist developed a league of extraordinary Humans who are fearless and have no emotions, There go and dengarous missions to retore peace and order for humanity",
    Director: "Shane Bane",
    Actors: "Hough Cloth, Greg Chris",
  },

  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Released: "Feb 14th, 2019",
    Poster: "https://i.pravatar.cc/48?u=118836",
    runtime: 133,
    imdbRating: 3.4,
    userRating: 4.5,
    Genre: "Fiction, Action",
    Director: "Clack Bane",
    Actors: "Humphrey Cloth, Moses Chris",
    Plot: "A virus out break consumed the Earth and wiped out half the earth population only a few was saved and no antidote for the virus has been developed only one little girl is immune and she is the only hope for Humanity",
  },
];

//console.log(tempMovieData);
/*
const KEY = "4f6ed6e4";

function App() {
  const [query, setQuery] = useState("matrix");
  const [movie, setMovie] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          if (data.response === "False") throw new Error("Movie not found");

          setMovie(data.Search);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovie([]);
        setError("");
        return;
      }

      fetchMovies();
    },
    [query]
  );

  function handleSelectedId(id) {
    setSelectedId((selected) => (selected === id ? null : id));
  }

  function handleCloseDetails() {
    setSelectedId(null);
  }

  function onHandleAddMovie(movie) {
    setWatched((movies) => [...movies, movie]);
    setSelectedId(null);
  }

  //function handleDetails() {}

  return (
    <div>
      <Header>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <MovieLength movie={movie} />
      </Header>

      <Main>
        <Box>
          {isLoading && <Loader />}

          {!isLoading && !error && (
            <MovieList
              movie={movie}
              handleSelectedId={handleSelectedId}
              handleCloseDetails={handleCloseDetails}
            />
          )}
          {error && <ErrorMessage error={error} />}
        </Box>

        <Box>
          {isLoading ? (
            <MovieDetails
              selectedId={selectedId}
              onHandleAddMovie={onHandleAddMovie}
            />
          ) : (
            <WatchedMovies watched={watched} />
          )}
        </Box>
      </Main>
    </div>
  );
}

function Header({ children }) {
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return <div style={headerStyle}>{children}</div>;
}

function Logo() {
  return <div>🍿usePopcorn</div>;
}

function Search({ query, setQuery }) {
  return (
    <div>
      <input
        placeholder="Search Movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

function Loader() {
  return <div>Loading...</div>;
}

function ErrorMessage({ error }) {
  return <div>{error}</div>;
}

function MovieLength({ movie }) {
  return <div>Movie {movie.length} Length</div>;
}

function Main({ children }) {
  const boxStyle = {
    display: "flex",
    justifyContent: "space-between",
    //background: "red",
    marginTop: "30px",
  };

  return <div style={boxStyle}>{children}</div>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const boxDiv = { background: "green", width: "500px", marginRight: "20px" };

  return (
    <div style={boxDiv}>
      <button onClick={() => setIsOpen((is) => !is)}>X</button>

      <div>{isOpen && children}</div>
    </div>
  );
}

function MovieList({ movie, handleSelectedId }) {
  return (
    <ul>
      {movie.map((movie) => (
        <MovieItems
          movie={movie}
          key={movie.imdbID}
          handleSelectedId={handleSelectedId}
        />
      ))}
    </ul>
  );
}

function MovieItems({ movie, handleSelectedId }) {
  const itemsStyle = { display: "flex" };

  return (
    <li style={itemsStyle} onClick={() => handleSelectedId(movie.imdbID)}>
      <img src={movie.Poster} alt={`Movie ${movie} `} />

      <div>
        <p>{movie.Title}</p>
        <p>📅{movie.Year}</p>
      </div>
    </li>
  );
}

function MovieDetails({ selectedId, handleCloseDetails, onHandleAddMovie }) {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const {
    imdbID,
    Title: title,
    imdbRating,
    Genre: genre,
    Director: director,
    Actors: actors,
    Plot: plot,
    Poster: poster,
    Runtime: runtime,
  } = movieDetails;

  function handleAddMovie() {
    const newMovie = { imdbRating, imdbID, runtime };
    onHandleAddMovie(newMovie);
  }

  useEffect(
    function () {
      async function fetchMovieDetails() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
          );

          if (!res.ok)
            throw new Error("Something went wromg fetching Movie details");

          const data = await res.json();

          setMovieDetails(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchMovieDetails();
    },
    [selectedId]
  );

  return (
    <div>
      <button onClick={handleCloseDetails}>&larr;</button>

      {isLoading && <Loader />}
      {error && <ErrorMessage />}

      {!isLoading && !error && <div>Hello</div>}
      {selectedId}

      <button onClick={handleAddMovie}>+Add movies</button>
    </div>
  );
}

function WatchedMovies({ watched }) {
  return (
    <div>
      {watched.map((watched) => (
        <Watched watched={watched} key={watched.imdbID} />
      ))}
    </div>
  );
}

function Watched({ watched }) {
  const watchedStyle = { display: "flex" };

  return (
    <li style={watchedStyle}>
      <img src={watched.Poster} alt={watched.imdbID} />

      <div style={watchedStyle}>
        <p>🌟 {watched.imdbRating}</p>
        <p>⭐ {watched.userRating}</p>
        <p>⏳ {watched.runtime}</p>
      </div>
    </li>
  );
}

*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

/*
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
*/

// function () {
//   const storedValue = localStorage.getItem("watched");
//   return JSON.parse(storedValue);
// }

//import { useState, useEffect } from "react";

const KEY = "4f6ed6e4";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const [watched, setWatched] = useState([]);

  function handleSelectedId(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddMovie(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  useEffect(
    function () {
      const controler = new AbortController();

      async function fetchMovies() {
        try {
          setError("");
          setIsLoading(true);
          const res = await fetch(
            ` http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controler.signal }
          );

          if (!res.ok) {
            throw new Error("Something went wrong with fetching movies");
          }

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
        } catch (err) {
          console.error(err.message);

          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controler.abort();
      };
    },
    [query]
  );

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MoviesList movies={movies} handleSelectedId={handleSelectedId} />
          )}
          {error && <ErrorMessage error={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMove={handleCloseMovie}
              handleAddMovie={handleAddMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} />
            </>
          )}
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

function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

function MoviesList({ movies, handleSelectedId }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          handleSelectedId={handleSelectedId}
        />
      ))}
    </ul>
  );
}

function Movie({ movie, handleSelectedId }) {
  return (
    <li onClick={() => handleSelectedId(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function MovieDetails({ selectedId, onCloseMove, handleAddMovie, watched }) {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const alreadyWatched = watched
    .map((watched) => watched.imdbID)
    .includes(selectedId);

  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  useEffect(
    function () {
      async function getMovies() {
        setIsLoading(true);
        const res = await fetch(
          ` http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovies(data);
        setIsLoading(false);
      }
      getMovies();
    },
    [selectedId]
  );

  const {
    Title: title,
    Plot: plot,
    Poster: poster,
    Genre: genre,
    Actor: actor,
    Director: director,
    Runtime: runtime,
    imdbRating,
    Released: released,
  } = movies;

  function onAddMovie() {
    const newMovie = {
      imdbID: selectedId,
      title,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      poster,
    };
    handleAddMovie(newMovie);
    onCloseMove();
  }

  useEffect(
    function () {
      if (!title) return;

      document.title = `Movie | ${title}`;

      return function () {
        document.title = "IMDB Movie Search";
      };
    },
    [title]
  );

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <header>
            <button onClick={onCloseMove} className="btn-back">
              &larr;
            </button>

            <img src={poster} alt={`Poster of ${movies} movie`} />

            <div className="details-overview">
              <h2>{title}</h2>

              <p>
                {released} &bull; {runtime}
              </p>

              <p>{genre}</p>

              <p>
                <span>⭐</span> {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {alreadyWatched ? (
                <p>You already rated this moive {watchedUserRating} </p>
              ) : (
                <>
                  <StarRating userRating={setUserRating} />
                  {userRating > 0 && (
                    <button onClick={onAddMovie} className="btn-add">
                      + Add movies
                    </button>
                  )}
                </>
              )}
            </div>

            <p>
              <em>{plot}</em>
            </p>

            <p>Starring {actor}</p>
            <p>Directed by {director}</p>
          </section>
        </div>
      )}
    </div>
  );
}

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMovieList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
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
          <span>{movie.runtime} </span>
        </p>
      </div>
    </li>
  );
}

const containerStyle = {
  display: "flex",
  alignitems: "center",
  gap: "10px",
};

const starContsinerStyle = {
  display: "flex",
};

const textStyle = {
  lightHight: "0",
  margin: "0",
};

function StarRating({ userRating }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function updateRating(rating) {
    setRating(rating);
    userRating(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={starContsinerStyle}>
        {Array.from({ length: 10 }, (_, i) => (
          <Star
            onClick={() => updateRating(i + 1)}
            onMouseEnter={() => setTempRating(i + 1)}
            onMouseLeave={() => setTempRating(0)}
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
}

const starStyle = {
  width: "27px",
  height: "27px",
  display: "block",
  cursor: "pointer",
};

function Star({ onClick, full, onMouseEnter, onMouseLeave }) {
  return (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      role="button"
      style={starStyle}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#fcc419"
          stroke="#fcc419"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fcc419"
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

/*


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
