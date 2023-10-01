import { movieBasicDetails, movieExtraDetails } from './details/movie.js';
import { tvShowBasicDetails, tvShowExtraDetails } from './details/tvShows.js';
import { personBasicDetails, personExtraDetails } from './details/person.js';
import { seasonExtraDetails } from './details/season.js';

export const getDetailsFromList = (
  { page, results, total_pages, total_results },
  lang
) => {
  const filteredList = results
    .map((data) => {
      switch (data.media_type) {
        case 'movie':
          return movieBasicDetails(data, lang);

        case 'tv':
          return tvShowBasicDetails(data, lang);

        case 'person':
          return personBasicDetails(data, lang);
        default:
          return console.error('getDetailsFromList: Unknown media type');
      }
    })
    .filter((media) => media !== null);

  return {
    page,
    results: filteredList,
    total_pages,
    total_results,
  };
};

export const getDetails = ({ data, media_type, reviews, lang }) => {
  switch (media_type) {
    case 'movie':
      return movieExtraDetails(data, reviews);

    case 'tv':
      return tvShowExtraDetails(data, reviews, lang);

    case 'person':
      return personExtraDetails(data, lang);
    default:
      return console.error('getDetails: Unknown media type');
  }
};

export const getSeasonDetails = (data) => {
  return seasonExtraDetails(data);
};
