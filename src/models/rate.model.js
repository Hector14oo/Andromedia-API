import { fetchAPI } from '../libs/fetchAPI.js'
import { MOVIERATE, TVSHOWRATE, GETRATEDMOVIES, GETRATEDTVSHOWS } from '../libs/constants/endpoints.js';
import { BasicDetails } from '../libs/filters/details/index.js';
import { formatResponse } from '../libs/constants/statusCode.js';

const filterRatedList = (list, mediaType, lang) => {
  const { page, results, total_pages, total_results } = list;
  return {
    page: page,
    results: results.map((item) => BasicDetails[mediaType]({ data: item, lang })),
    totalPages: total_pages,
    totalResults: total_results,
  }
}

const rateEndPointDictionary = {
  movie: MOVIERATE,
  tv: TVSHOWRATE,
}

export class RateModel {
  static getRate = async ({ guestId, lang }) => {
    const movies = await fetchAPI(GETRATEDMOVIES({ guestId, lang }), 'GET')
    const tvShows = await fetchAPI(GETRATEDTVSHOWS({ guestId, lang }), 'GET')
    if(movies.success === false) return formatResponse(movies);
    if(tvShows.success === false) return formatResponse(tvShows);
  
    return { 
      movies: filterRatedList(movies, 'movie', lang),
      tvShows: filterRatedList(tvShows, 'tv', lang),
    };
  }

  static addRate = async ({ mediaType, id, guestId, body }) => {
    const data = await fetchAPI(rateEndPointDictionary[mediaType]({ id, guestId }), 'POST', JSON.stringify(body).trim())
    if(data.success === false) return formatResponse(data);

    return formatResponse(data);
  }

  static removeRate = async ({ mediaType, id, guestId, body }) => {
    const data = await fetchAPI(rateEndPointDictionary[mediaType]({ id, guestId }), 'DELETE', JSON.stringify(body).trim())
    if(data.success === false) return formatResponse(data);

    return formatResponse(data);
  }
}