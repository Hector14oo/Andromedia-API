import { movieBasicDetails, movieExtraDetails} from './details/movie.js';
import { tvShowBasicDetails, tvShowExtraDetails } from './details/tvShows.js';
import { personBasicDetails, personExtraDetails } from './details/person.js';

export const getDetailsFromList = ({
  page,
  results,
  total_pages,
  total_results,
}) => {
  const filteredList = results
    .map((data) => {
      switch (data.media_type) {
        case 'movie':
          return movieBasicDetails(data);

        case 'tv':
          return tvShowBasicDetails(data);

        case 'person':
          return personBasicDetails(data);
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

export const getDetails = (data, media_type, reviews) => {
  switch (media_type) {
    case 'movie':
      return movieExtraDetails(data, reviews);

    case 'tv':
      return tvShowExtraDetails(data);

    case 'person':
      return personExtraDetails(data);
    default:
      return console.error('getDetails: Unknown media type');
  }
};
