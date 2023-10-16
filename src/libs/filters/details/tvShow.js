import { getGenres } from '../../constants/genres.js';
import { imagesObj, imagesFromList, videosFromList, reviewsFilter, seasonDetailsFromList } from './extras/index.js';

export const tvShowBasicDetails = ({ data, lang }) => {
  const { id, name, adult, genre_ids, tagline, overview, poster_path, backdrop_path, first_air_date, vote_average, media_type } = data;

  const genres = getGenres(genre_ids, 'tv')
  const url = `${globalThis.process.env.HOST}/api/media/tv/${id}?lang=${lang}`

  return {
    id,
    title: name,
    adult,
    genres,
    tagline,
    overview,
    ...imagesObj({poster_path, backdrop_path}),
    year: first_air_date,
    votes: vote_average,
    type: media_type,
    url,
  };
};

export const tvShowExtraDetails = ({data, reviews, lang}) => {
  const { id, name, adult, genres, tagline, overview, images, videos, first_air_date, vote_average, seasons, status } = data;

  return {
    id,
    title: name,
    adult,
    genres: genres.map((genre) => genre.name),
    tagline,
    overview,
    reviews: reviewsFilter(reviews),
    seasons: seasonDetailsFromList({ list: seasons, showId: id, lang }),
    images: {
      posters: imagesFromList(images.posters),
      backdrops: imagesFromList(images.backdrops),
    },
    videos: videosFromList(videos.results),
    year: first_air_date,
    status,
    votes: vote_average,
  };
};
