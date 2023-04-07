import { useState } from "react";
import AddMovies from "./component/AddMovies";
import MovieList from "./component/MovieList";
import SearchBar from "./component/SearchBar";
import { Route, Routes } from "react-router-dom";
import DetailedMovie from "./pages/DetailedMovie";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 0,
      name: "Leon",
      pays: "USA",
      Categorie: "Action",
      photo:
        "https://fr.web.img4.acsta.net/r_1920_1080/img/8b/7e/8b7e6e259cf75982d5de8e62fcbaf3fd.jpg",
      rate: "8,4",
      desc: "lorem lorem lorem",
      trailer: "https://www.youtube.com/embed/aNQqoExfQsg",
    },
  ]);
  // const addMovie = (newMovie) => {
  //   const newId =
  //     movies.reduce((maxId, movie) => Math.max(maxId, movie.id), -1) + 1;
  //   setMovies([...movies, { ...newMovie, id: newId }]);
  // };
  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length }]);
  };
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar setQuery={setQuery} />
              <AddMovies addmovies={addMovie} />
              <MovieList movies={movies} query={query} />
            </>
          }
        ></Route>
        <Route path="/movie/:id" element={<DetailedMovie movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
