import React from "react";
import { Link } from "react-router-dom";

import HeroSlide from "../components/common/HeroSlide";
import MovieList from "../components/MovieList";

import { category, movieType, tvType } from "../api/tmdbApi";
import RightIcon from "../components/icons/RightIcon";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Upcoming Movies</h2>
            <Link to={`/movie-${movieType.upcoming}`}>
              <span>View more</span>
              <RightIcon />
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.upcoming} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to={`/movie-${movieType.popular}`}>
              <span>View more</span>
              <RightIcon />
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to={`/movie-${movieType.top_rated}`}>
              <span>View more</span>
              <RightIcon />
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to={`/tv-${tvType.popular}`}>
              <span>View more</span>
              <RightIcon />
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to={`/tv-${tvType.top_rated}`}>
              <span>View more</span>
              <RightIcon />
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>On The Air TV</h2>
            <Link to={`/tv-${tvType.on_the_air}`}>
              <span>View more</span>
              <RightIcon />
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.on_the_air} />
        </div>
      </div>
    </>
  );
};

export default Home;
