import { getGenres } from '../../constants/genres.js';
import { reviewsFilter } from './reviews.js';
import { imagesObj, imagesFromList, videosFromList } from './assets.js';

export const tvShowBasicDetails = (tvShow, lang) => {
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
    media_type,
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
    type: media_type,
    url: `http://localhost:1234/api/media/tv/${id}${lang ? '?lang=' + lang : ''}`,
  };
};

export const tvShowExtraDetails = (tvShow, reviews) => {
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
    reviews: reviewsFilter(reviews),
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
