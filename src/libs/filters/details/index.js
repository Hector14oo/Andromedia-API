import { movieBasicDetails, movieExtraDetails } from './movie.js';
import { tvShowBasicDetails, tvShowExtraDetails } from './tvShow.js';
import { personBasicDetails, personExtraDetails } from './person.js';

export const BasicDetails = {
  movie: movieBasicDetails,
  tv: tvShowBasicDetails,
  person: personBasicDetails,
};

export const ExtraDetails = {
  movie: movieExtraDetails,
  tv: tvShowExtraDetails,
  person: personExtraDetails,
};

export { seasonExtraDetails } from './extras/season.js';
