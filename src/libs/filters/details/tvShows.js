import { getGenres } from '../../constants/genres.js';
import { imagesObj, imagesFromList, videosFromList } from './assets.js';

export const tvShowBasicDetails = (tvShow) => {
  const {
    id,
    name,
    adult,
    genre_ids,
    tagline,
    overview,
    poster_path,
    backdrop_path,
    first_air_date,
    vote_average,
  } = tvShow;

  const genres = getGenres(genre_ids, 'tv')

  return {
    id,
    title: name,
    adult,
    genres,
    tagline,
    overview,
    ...imagesObj({poster_path, backdrop_path}),
    date: first_air_date,
    votes: vote_average,
  };
};

export const tvShowExtraDetails = (tvShow) => {
  const {
    id,
    name,
    adult,
    genres,
    tagline,
    overview,
    images,
    videos,
    first_air_date,
    vote_average,
    seasons,
    status,
  } = tvShow;

  const seasonsFilter = (list) => {
    return list.map(({ id, name, season_number, episode_count, poster_path }) => ({
      id,
      title: name,
      number: season_number,
      episodes: episode_count,
      poster: poster_path ? imagesObj({poster_path}).poster : null,
    }));
  };

  return {
    id,
    title: name,
    adult,
    genres: genres.map((genre) => genre.name),
    tagline,
    overview,
    seasons: seasonsFilter(seasons),
    images: {
      posters: imagesFromList(images.posters),
      backdrops: imagesFromList(images.backdrops),
    },
    videos: videosFromList(videos.results),
    date: first_air_date,
    status,
    votes: vote_average,
  };
};
