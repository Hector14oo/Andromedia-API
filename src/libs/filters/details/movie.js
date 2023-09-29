import { getGenres } from '../../constants/genres.js';
import { runtimeCalculator } from './runtimeCalculator.js';
import { reviewsFilter } from './reviews.js';
import { imagesObj, imagesFromList, videosFromList } from './assets.js';

export const movieBasicDetails = (movie) => {
  const {
    id,
    title,
    adult,
    genre_ids,
    tagline,
    overview,
    poster_path,
    backdrop_path,
    release_date,
    vote_average,
    media_type
  } = movie;

  if (!genre_ids.lenght && !overview && !release_date) return null;

  const genres = getGenres(genre_ids, 'movie');

  return {
    id,
    title,
    adult,
    genres,
    tagline,
    overview,
    ...imagesObj({ poster_path, backdrop_path }),
    year: release_date,
    votes: vote_average,
    type: media_type,
  };
};

export const movieExtraDetails = (movie, reviews) => {
  const {
    id,
    title,
    adult,
    genres,
    runtime,
    tagline,
    overview,
    images,
    videos,
    release_date,
    vote_average,
    belongs_to_collection,
  } = movie;

  const collection = belongs_to_collection
    ? {
        id: belongs_to_collection.id,
        name: belongs_to_collection.name,
        ...imagesObj({
          poster_path: belongs_to_collection.poster_path,
          backdrop_path: belongs_to_collection.backdrop_path,
        }),
      }
    : null;

  return {
    id,
    title,
    adult,
    genres: genres.map((genre) => genre.name),
    duration: runtimeCalculator(runtime),
    tagline,
    overview,
    reviews: reviewsFilter(reviews),
    images: {
      posters: imagesFromList(images.posters),
      backdrops: imagesFromList(images.backdrops),
    },
    videos: videosFromList(videos.results),
    date: release_date,
    votes: vote_average,
    collection,
  };
};