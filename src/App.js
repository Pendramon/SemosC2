import React from 'react';
import FilmCard from './components/FilmCard';
import "./App.css";
import image from './assets/pulpfiction.jpg';

class App extends React.Component {
  render() {
    let movie = {
      title: "Pulp Fiction",
      genre: "Crime",
      released: 1994,
      rating: 8.9,
      awards: "1 Oscars",
      runningTime: "137 min",
      logline: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      path: "https://www.imdb.com/title/tt0110912/",
      poster: image
    }

    return(
      <div className="container">
        <FilmCard 
          title={movie.title} 
          genre={movie.genre} 
          released={movie.released} 
          rating={movie.rating} 
          awards={movie.awards} 
          runningTime={movie.runningTime}
          logline={movie.logline}
          path={movie.path}
          poster={movie.poster}
        />
      </div>
    );
  }
}

export default App;
