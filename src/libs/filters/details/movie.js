import { getGenres } from '../../constants/genres.js';
import { imagesObj, imagesFromList, videosFromList, reviewsFilter, runtimeCalculator } from './extras/index.js';
import { personBasicDetails } from './person.js';

export const movieBasicDetails = ({ data, lang }) => {
  const { id, title, adult, genre_ids, tagline, overview, poster_path, backdrop_path, release_date, vote_average, media_type } = data;

  if (!genre_ids.lenght && !overview && !release_date) return null;

  const images = imagesObj({ poster_path, backdrop_path });
  const url = `${globalThis.process.env.HOST}/api/media/movie/${id}?lang=${lang}`

  return {
    id,
    title,
    adult,
    genres: getGenres(genre_ids, 'movie'),
    tagline,
    overview,
    ...images,
    year: release_date,
    votes: vote_average,
    type: media_type,
    url,
  };
};

export const movieExtraDetails = ({ data, reviews, credits, lang }) => {
  const { id, title, adult, genres, runtime, tagline, overview, images, videos, release_date, vote_average, belongs_to_collection } = data;

  const collection = belongs_to_collection && {
    id: belongs_to_collection.id,
    name: belongs_to_collection.name,
    ...imagesObj({
      poster_path: belongs_to_collection.poster_path,
      backdrop_path: belongs_to_collection.backdrop_path,
    }),
  }
    
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
    collection: collection || null,
    credits: {
      cast: credits.cast.map(({ character, ...data }) => ({ character, ...personBasicDetails(data, lang) })),
      crew: credits.crew.map(({ department, job, ...data }) => ({ department, job, ...personBasicDetails(data, lang) })),
    },
  };
};
