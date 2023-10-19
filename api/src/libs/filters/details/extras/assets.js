export const imagesObj = ({ backdrop_path, poster_path }) => {
  return {
    poster: poster_path ? {
      light: `https://image.tmdb.org/t/p/w500${poster_path}`,
      original: `https://image.tmdb.org/t/p/original${poster_path}`,
    } : null,
    backdrop: backdrop_path ? {
      light: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
      original: `https://image.tmdb.org/t/p/original${backdrop_path}`,
    } : null,
  };
};

export const imagesFromList = (list) => {
  return list.map(({ width, height, file_path }) => ({
    width,
    height,
    light: `https://image.tmdb.org/t/p/w500${file_path}`,
    original: `https://image.tmdb.org/t/p/original${file_path}`,
  }));
};

export const videosFromList = (list) => {
  return list
    .filter((video) => video.type === 'Teaser' || video.type === 'Trailer')
    .map((video) => ({
      id: video.id,
      link: `https://www.youtube.com/watch?v=${video.key}`,
      name: video.name,
      type: video.type,
    }));
};
