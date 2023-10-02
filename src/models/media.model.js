import { options } from '../config.js';
import { getDetails, getDetailsFromList, getSeasonDetails } from '../libs/filters/index.js';
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
    return getDetailsFromList(data, lang);
  };

  static getMediaDetails = async ({ lang, id, mediaType }) => {
    const response = await fetch(urlConstructor({ lang, id, mediaType }), options);
    const data = await response.json();

    if(mediaType !== 'people'){
      const reviewsRes = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/reviews`, options);
      const reviewsData = await reviewsRes.json();
      data.reviews = reviewsData;
    }

    if(mediaType === 'movie'){
      const creditsRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, options);
      const creditsData = await creditsRes.json();
      data.credits = creditsData;
    }

    return getDetails({data, media_type: mediaType, lang});
  };

  static getSeasonDetails = async ({lang = 'en-US', id, seasonNumber}) => {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?lang=${lang}`, options);
    const data = await response.json();

    return getSeasonDetails(data)
  }
}
