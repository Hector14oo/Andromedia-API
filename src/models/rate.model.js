import { fetchAPI } from '../libs/fetchAPI.js'
import { ADDMOVIERATE, ADDTVSHOWRATE, GETRATEDMOVIES, GETRATEDTVSHOWS } from '../libs/constants/endpoints.js';
import { BasicDetails } from '../libs/filters/details/index.js';
import { createError } from '../libs/constants/errors.js';

const filterRatedList = (list, mediaType, lang) => {
  const { page, results, total_pages, total_results } = list;
  return {
    page: page,
    results: results.map((item) => BasicDetails[mediaType]({ data: item, lang })),
    totalPages: total_pages,
    totalResults: total_results,
  }
}

export class RateModel {
  static getRate = async ({ guestId, lang }) => {
    const movies = await fetchAPI(GETRATEDMOVIES({ guestId, lang }), 'GET')
    const tvShows = await fetchAPI(GETRATEDTVSHOWS({ guestId, lang }), 'GET')
    if(movies.success === false) return createError(movies);
    if(tvShows.success === false) return createError(tvShows);
  
    return { 
      movies: filterRatedList(movies, 'movie', lang),
      tvShows: filterRatedList(tvShows, 'tv', lang),
    };
  }

  static addMovieRate = async ({ id, guestId, body }) => {
    const data = await fetchAPI(ADDMOVIERATE({ id, guestId }), 'POST', JSON.stringify(body).trim())
    if(data.success === false) return createError(data);

    return data;
  }

  static addTvShowRate = async ({ id, guestId, body }) => {
    const data = await fetchAPI(ADDTVSHOWRATE({ id, guestId }), 'POST', JSON.stringify(body).trim())
    if(data.success === false) return createError(data);

    return data;
  }
}