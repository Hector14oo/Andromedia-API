export const urlConstructor = ({ lang = 'en-US', id, mediaType }) => {
  switch (mediaType) {
    case 'movie':
      return `https://api.themoviedb.org/3/movie/${id}?language=${lang}&include_image_language=null&append_to_response=videos,images,reviews`;
    case 'tv':
      return `https://api.themoviedb.org/3/tv/${id}?language=${lang}&include_image_language=null&append_to_response=videos,images,reviews`;
    case 'person':
      return `https://api.themoviedb.org/3/person/${id}?language=${lang}&include_image_language=null&append_to_response=images,movie_credits`;
    default:
      return `https://api.themoviedb.org/3/person/${id}?language=${lang}&include_image_language=null&append_to_response=images,movie_credits`;
  }
};
