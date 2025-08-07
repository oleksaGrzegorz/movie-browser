import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./common/Navigation";
import MovieList from "./features/movieList/MovieList";
import MovieDetails from "./features/movieDetails/MovieDetails";
import PersonList from "./features/personList/PersonList";
import PersonDetails from "./features/personDetails/PersonDetails";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/people" element={<PersonList />} />
        <Route path="/people/:id" element={<PersonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;