import { fetchAPI } from '../libs/fetchAPI.js'
import { ADDMOVIERATE, ADDTVSHOWRATE, GETRATEDMOVIES, GETRATEDTVSHOWS } from '../libs/constants/endpoints.js';
import { createError } from '../libs/constants/errors.js';

export class RateModel {
  static getRate = async ({ guestId }) => {
    const movies = await fetchAPI(GETRATEDMOVIES({ guestId }), 'GET')
    const tvShows = await fetchAPI(GETRATEDTVSHOWS({ guestId }), 'GET')
    if(movies.success === false) return createError(movies);
    if(tvShows.success === false) return createError(tvShows);
  
    return { movies, tvShows };
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