import { imagesObj } from './assets.js';

export const seasonDetailsFromList = (list) => {
  return list.map(
    ({ id, name, season_number, episode_count, poster_path }) => ({
      id,
      title: name,
      number: season_number,
      episodesCount: episode_count,
      poster: poster_path ? imagesObj({ poster_path }).poster : null,
    })
  );
};

export const seasonExtraDetails = (season) => {
  const {
    id,
    name,
    season_number,
    air_date,
    overview,
    episodes,
    poster_path,
    vote_average,
  } = season;

  return {
    id,
    title: name,
    number: season_number,
    date: air_date,
    overview,
    episodes,
    poster: poster_path ? imagesObj({ poster_path }).poster : null,
    votes: vote_average,
  };
};
