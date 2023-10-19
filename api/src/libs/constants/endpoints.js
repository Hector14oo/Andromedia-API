const AUTH = `api_key=${globalThis.process.env.API_KEY}`

export const SEARCH = ({ search, page = 1, lang = 'en-US' }) => `https://api.themoviedb.org/3/search/multi?${AUTH}&query=${search}&page=${page}&language=${lang}`;
export const TRENDING = ({ timeWindow  = 'week', page = 1, lang = 'en-US' }) => `https://api.themoviedb.org/3/trending/all/${timeWindow}?${AUTH}&page=${page}&language=${lang}`;

export const MEDIADETAILS = ({ mediaType, id, lang = 'en-US' }) => {
  switch (mediaType) {
    case 'movie':
      return `https://api.themoviedb.org/3/movie/${id}?${AUTH}&language=${lang}&include_image_language=null&include_video_language=null&include_review_language=null&append_to_response=videos,images,reviews`;

    case 'tv':
      return `https://api.themoviedb.org/3/tv/${id}?${AUTH}&language=${lang}&include_image_language=null&include_video_language=null&append_to_response=videos,images`;

    case 'person':
      return `https://api.themoviedb.org/3/person/${id}?${AUTH}&language=${lang}&include_image_language=null&append_to_response=images,combined_credits`;

    default:
      return console.error('Unknown media type');
  }
};

export const REVIEWS = ({ mediaType, id }) => `https://api.themoviedb.org/3/${mediaType}/${id}/reviews?${AUTH}`;
export const MEDIACREDITS = ({ mediaType, id, lang = 'en-US' }) => `https://api.themoviedb.org/3/${mediaType}/${id}/credits?${AUTH}&language=${lang}`;
export const SEASONDETAILS = ({ id, seasonNumber, lang = 'en-US' }) => `https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?${AUTH}&language=${lang}`

export const MOVIERATE = ({ id, guestId }) => `https://api.themoviedb.org/3/movie/${id}/rating?${AUTH}&guest_session_id=${guestId}`
export const TVSHOWRATE = ({ id, guestId }) => `https://api.themoviedb.org/3/tv/${id}/rating?${AUTH}&guest_session_id=${guestId}`

export const GETRATEDMOVIES = ({ guestId, lang = 'en-US' }) => `https://api.themoviedb.org/3/guest_session/${guestId}/rated/movies?${AUTH}&language=${lang}`
export const GETRATEDTVSHOWS = ({ guestId, lang = 'en-US' }) => `https://api.themoviedb.org/3/guest_session/${guestId}/rated/tv?${AUTH}&language=${lang}`