import { imagesObj } from './assets.js';
import { runtimeCalculator } from './runtimeCalculator.js';

export const seasonDetailsFromList = (list, showId, lang) => {
  return list.map(
    ({ id, name, season_number, episode_count, poster_path }) => ({
      id,
      title: name,
      number: season_number,
      episodesCount: episode_count,
      poster: poster_path ? imagesObj({ poster_path }).poster : null,
      url: `http://localhost:1234/api/media/tv/${showId}/season/${season_number}?lang=${lang}`,
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
    episodes: episodeFilter(episodes),
    poster: poster_path ? imagesObj({ poster_path }).poster : null,
    votes: vote_average,
  };
};

const episodeFilter = (list) => {
  return list.map(
    ({
      id,
      name,
      episode_number,
      air_date,
      overview,
      runtime,
      still_path,
      vote_average,
    }) => ({
      id,
      title: name,
      number: episode_number,
      date: air_date,
      overview,
      duration: runtimeCalculator(runtime),
      preview: still_path ? imagesObj({ poster_path: still_path }).poster : null,
      votes: vote_average,
    })
  );
};
