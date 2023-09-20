import { movieGenres, tvGenres } from './genres.js';

export const filterList = ({ page, results, total_pages, total_results }) => {
  const filteredList = results.map((movie) => {
    switch (movie.media_type) {
      case 'movie':
        return {
          id: movie.id,
          genres: movie.genre_ids.map(
            (id) => movieGenres.find((genre) => genre.id === id).name
          ),
          title: movie.title,
          overview: movie.overview ?? null,
          poster: movie.poster_path
            ? {
                light: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                original: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
              }
            : null,
          backdrop: movie.backdrop_path
            ? {
                light: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
                original: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
              }
            : null,
          date: movie.release_date,
          votes: movie.vote_average,
          media_type: movie.media_type,
        };

      case 'tv':
        return {
          id: movie.id,
          genre: movie.genre_ids.map(
            (id) => tvGenres.find((genre) => genre.id === id).name
          ),
          title: movie.name,
          overview: movie.overview ?? null,
          poster: movie.poster_path
            ? {
                light: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                original: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
              }
            : null,
          backdrop: movie.backdrop_path
            ? {
                light: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
                original: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
              }
            : null,
          first_air_date: movie.first_air_date,
          votes: movie.vote_average,
          media_type: movie.media_type,
        };

      case 'person':
        return {
          id: movie.id,
          gender: movie.gender,
          title: movie.name,
          poster: {
            light: `https://image.tmdb.org/t/p/w185${movie.profile_path}`,
            original: `https://image.tmdb.org/t/p/original${movie.profile_path}`,
          },
          role: movie.known_for_department,
          media_type: movie.id,
        };
    }
  });

  return {
    page,
    results: filteredList,
    total_pages,
    total_results,
  };
};

export const filterMovie = (movie) => {
  const reviewsFilter = (list) => {
    return list.results.map((review) => ({
      id: review.id,
      author: review.author,
      content: review.content,
      created: review.created_at,
      updated: review.updated_at,
      link: review.url,
    }));
  };

  const imagesFilter = ({ backdrops, posters }) => {
    const filter = (collection) =>
      collection.map(({ width, height, file_path }) => ({
        width,
        height,
        light: `https://image.tmdb.org/t/p/w500${file_path}`,
        original: `https://image.tmdb.org/t/p/original${file_path}`,
      }));

    return {
      posters: filter(posters),
      backdrops: filter(backdrops),
    };
  };

  const videosFilter = (list) => {
    return list
      .filter((video) => video.type === 'Teaser' || video.type === 'Trailer')
      .map((video) => ({
        id: video.id,
        link: `https://www.youtube.com/watch?v=${video.key}`,
        name: video.name,
        type: video.type,
      }));
  };

  return {
    id: movie.id,
    title: movie.author,
    tagline: movie.tagline,
    overview: movie.overview,
    reviews: reviewsFilter(movie.reviews.results),
    images: imagesFilter(movie.images),
    videos: videosFilter(movie.videos.results),
    year: movie.release_date,
    votes: movie.vote_average,
  };
};
