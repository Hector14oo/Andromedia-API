export const SEARCH = ({ search, page = 1, lang = 'en-US' }) => `https://api.themoviedb.org/3/search/multi?query=${search}&page=${page}&language=${lang}`;
export const TRENDING = ({ timeWindow  = 'week', page = 1, lang = 'en-US' }) => `https://api.themoviedb.org/3/trending/all/${timeWindow}?page=${page}&language=${lang}`;

export const MEDIADETAILS = ({ mediaType, id, lang = 'en-US' }) => {
  switch (mediaType) {
    case 'movie':
      return `https://api.themoviedb.org/3/movie/${id}?language=${lang}&include_image_language=null&include_video_language=null&include_review_language=null&append_to_response=videos,images,reviews`;

    case 'tv':
      return `https://api.themoviedb.org/3/tv/${id}?language=${lang}&include_image_language=null&include_video_language=null&append_to_response=videos,images`;

    case 'person':
      return `https://api.themoviedb.org/3/person/${id}?language=${lang}&include_image_language=null&append_to_response=images,combined_credits`;

    default:
      return console.error('Unknown media type');
  }
};

export const REVIEWS = ({ mediaType, id }) => `https://api.themoviedb.org/3/${mediaType}/${id}/reviews`;
export const MOVIECREDITS = ({ id }) => `https://api.themoviedb.org/3/movie/${id}/credits`;
export const SEASONDETAILS = ({ id, seasonNumber, lang = 'en-US' }) => `https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?lang=${lang}`