import { options } from '../config.js';
import { getDetails, getDetailsFromList } from '../libs/filters/index.js';
import { urlConstructor } from '../libs/urlConstructor.js';

export class Media {
  static getSearch = async ({ search, lang = 'en-US', page = 1 }) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${search}&language=${lang}&page=${page}`,
      options
    );
    const data = await response.json(response);
    return getDetailsFromList(data, lang);
  };

  static getTrending = async ({timeWindow = 'week', lang = 'en-US', page = 1}) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/${timeWindow}?language=${lang}&page=${page}`,
      options
    );
    const data = await response.json();
    return getDetailsFromList(data);
  };

  static getMediaDetails = async ({ lang, id, mediaType }) => {
    const url = urlConstructor({ lang, id, mediaType });
    const response = await fetch(url, options);
    const data = await response.json();

    if(mediaType !== 'people'){
      const reviewsRes = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/reviews`, options);
      const reviewsData = await reviewsRes.json();

      return getDetails(data, mediaType, reviewsData);
    }
    return getDetails(data, mediaType);
  };
}
