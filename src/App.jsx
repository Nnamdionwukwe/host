import { useState } from "react";
import "./App.css";

const friends = [
  {
    id: crypto.randomUUID(),
    image: "https://i.pravatar.cc/48?u=118836",
    name: " Clark",
    balance: -7,
  },
  {
    id: crypto.randomUUID(),
    image: "https://i.pravatar.cc/48?u=499476",
    name: "Sarah",
    balance: 20,
  },
  {
    id: crypto.randomUUID(),
    image: "https://i.pravatar.cc/48?u=933372",
    name: "Anthoney",
    balance: 0,
    URL: "index.html",
  },
];

function App() {
  const [friend, setFriend] = useState(friends);
  const [isAddFrienOpen, setIsAddFriendOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(null);

  function handleSubmitFriend(newFriend) {
    setFriend((friend) => [...friend, newFriend]);
    setIsAddFriendOpen(false);
    setIsSelected(null);
  }

  function handleDelete(id) {
    setFriend((friend) => friend.filter((friend) => friend.id !== id));
    setIsSelected(null);
  }

  function handleSelected(friend) {
    // setIsSelected(friend);
    setIsSelected((cur) => (cur?.id === friend.id ? null : friend));
  }

  function handleSubmitBill(value) {
    setFriend((friend) =>
      friend.map((friend) =>
        friend.id === isSelected.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setIsSelected(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <FriendsList
          friend={friend}
          handleDelete={handleDelete}
          handleSelected={handleSelected}
          isSelected={isSelected}
        />
        {isAddFrienOpen && (
          <AddFriendsForm handleSubmitFriend={handleSubmitFriend} />
        )}
        <button onClick={() => setIsAddFriendOpen((is) => !is)}>
          {isAddFrienOpen ? "Close" : "Add Friend"}
        </button>
      </header>

      {isSelected && (
        <SplitBillForm
          isSelected={isSelected}
          handleSubmitBill={handleSubmitBill}
        />
      )}
    </div>
  );
}

function FriendsList({ friend, handleDelete, isSelected, handleSelected }) {
  return (
    <div>
      {friend.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          handleDelete={handleDelete}
          isSelected={isSelected}
          handleSelected={handleSelected}
        />
      ))}
    </div>
  );
}

function Friend({ friend, handleDelete, isSelected, handleSelected }) {
  const selected = friend.id === isSelected?.id;
  return (
    <div className="main-div">
      <img src={friend.image} alt={friend.name} />
      <div className="name-div">
        <a href="index.html">
          <p>{friend.name}</p>
        </a>

        {friend.balance < 0 && (
          <p>
            You owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance > 0 && (
          <p>
            {friend.name} owes you {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even </p>}
      </div>

      <button onClick={() => handleSelected(friend)}>
        {selected ? "Close" : "Select"}
      </button>

      <button onClick={() => handleDelete(friend.id)}>Delete</button>
    </div>
  );
}

function AddFriendsForm({ handleSubmitFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleAddFriend(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = { id, image: `${image}?=${id}`, name, balance: 0 };
    handleSubmitFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form onSubmit={handleAddFriend}>
      <div className="main-div">
        <p>Friend name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>

      <div className="main-div">
        <p>Friend name</p>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
        />
      </div>

      <button>Add</button>
    </form>
  );
}

function SplitBillForm({ isSelected, handleSubmitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [billSelect, setBillSelect] = useState("");

  function handleSplitBill(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;

    handleSubmitBill(billSelect === "user" ? paidByFriend : -paidByUser);
    setBill("");
    setPaidByUser("");
  }

  return (
    <form onSubmit={handleSplitBill}>
      <h3>SPLIT A BILL WITH {isSelected.name} </h3>

      <div className="input-div">
        <p>Bill Value</p>
        <input
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          type="text"
        />
      </div>

      <div className="input-div">
        <p>Your expense</p>
        <input
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value)
            )
          }
          type="text"
        />
      </div>

      <div className="input-div">
        <p>{isSelected.name}'s expense</p>
        <input value={paidByFriend} disabled type="text" />
      </div>

      <div className="input-div">
        <p>Whois paying the bill</p>
        <select
          value={billSelect}
          onChange={(e) => setBillSelect(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{isSelected.name} </option>
        </select>
      </div>

      <button>SPLIT BILL</button>
      <a href={isSelected.URL}>
        <button>NEW</button>
      </a>
    </form>
  );
}

export default App;

/*
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          <MoviesList movies={movies} />
        </Box>

        <Box>
          <>
            <WatchedSummary watched={watched} />

            <WatchedMovieList watched={watched} />
          </>
        </Box>
      </Main>
    </>
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

function Search() {
  const [query, setQuery] = useState("");
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

/*
  function WatchedBox() {
    
    const [isOpen2, setIsOpen2] = useState(true);
  
    return (
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen2((open) => !open)}
        >
          {isOpen2 ? "–" : "+"}
        </button>
        {isOpen2 && (
         
        )}
      </div>
    );
  }
  

function MoviesList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function Movie({ movie }) {
  return (
    <li>
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
  );
}
*/
