import { fetchAPI } from '../libs/fetchAPI.js';
import { SEARCH, TRENDING, MEDIADETAILS, REVIEWS, MOVIECREDITS, SEASONDETAILS } from '../libs/constants/endpoints.js';
import { getDetails, getDetailsFromList, getSeasonDetails } from '../libs/filters/index.js';

export class Media {
  static getSearch = async ({ search, page, lang }) => {
    const data = await fetchAPI(SEARCH({ search, page, lang }));
    return getDetailsFromList(data, lang);
  };

  static getTrending = async ({ timeWindow, page, lang }) => {
    const data = await fetchAPI(TRENDING({ timeWindow, page, lang }));
    return getDetailsFromList(data, lang);
  };

  static getMediaDetails = async ({ mediaType, id, lang }) => {
    const data = await fetchAPI(MEDIADETAILS({ mediaType, id, lang }));

    if (mediaType !== 'people') {
      const reviewsData = await fetchAPI(REVIEWS({ mediaType, id }));
      data.reviews = reviewsData;
    }
    if (mediaType === 'movie') {
      const creditsData = await fetchAPI(MOVIECREDITS({ id }));
      data.credits = creditsData;
    }

    return getDetails({ data, mediaType, lang });
  };

  static getSeasonDetails = async ({ id, seasonNumber, lang }) => {
    const data = await fetchAPI(SEASONDETAILS({ id, seasonNumber, lang }));
    return getSeasonDetails(data);
  };
}
