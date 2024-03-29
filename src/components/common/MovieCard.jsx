import React from "react";

import { Link } from "react-router-dom";

import Button from "./Button";

import apiConfig from "../../api/apiConfig";
import { category } from "../../api/tmdbApi";
import { PlayIcon } from "../icons/PlayIcon";

const MovieCard = (props) => {
  const item = props.item;

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <div className="movie-card__play-btn">
          <PlayIcon />
        </div>
        <h3>{item.title || item.name}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
