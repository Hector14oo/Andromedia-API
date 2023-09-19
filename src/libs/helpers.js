export const extPropsFromList = ({
  page,
  results,
  total_pages,
  total_results,
}) => {
  const filteredList = results.map((movie) => {
    const {
      id,
      gender,
      genre,
      title,
      name,
      overview,
      media_type,
      poster_path,
      backdrop_path,
      profile_path,
      release_date,
      first_air_date,
      vote_average,
      known_for_department,
    } = movie;

    switch (media_type) {
      case 'movie':
        return {
          id,
          title,
          overview,
          poster: poster_path ? {
            light: `https://image.tmdb.org/t/p/w500${poster_path}`,
            original: `https://image.tmdb.org/t/p/original${poster_path}`,
          } : null,
          backdrop: backdrop_path ? {
            light: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
            original: `https://image.tmdb.org/t/p/original${backdrop_path}`,
          } : null,
          date: release_date,
          votes: vote_average,
          media_type,
        };

      case 'tv':
        return {
          id,
          genre,
          title: name,
          overview,
          poster: {
            light: `https://image.tmdb.org/t/p/w500${poster_path}`,
            original: `https://image.tmdb.org/t/p/original${poster_path}`,
          },
          backdrop: {
            light: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
            original: `https://image.tmdb.org/t/p/original${backdrop_path}`,
          },
          first_air_date,
          votes: vote_average,
          media_type,
        };

      case 'person':
        return {
          id,
          gender,
          title: name,
          poster: {
            light: `https://image.tmdb.org/t/p/w185${profile_path}`,
            original: `https://image.tmdb.org/t/p/original${profile_path}`,
          },
          role: known_for_department,
          media_type,
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

export const extProps = (movie) => {
  const {
    id,
    title,
    tagline,
    overview,
    reviews,
    images,
    videos,
    release_date,
    vote_average,
  } = movie;

  const reviewsFilter = (json) => {
    return json.results.map(
      ({ id, author, content, created_at, updated_at, url }) => ({
        id,
        author,
        content,
        created: created_at,
        updated: updated_at,
        link: url,
      })
    );
  };

  const imagesFilter = (json) => {
    const { backdrops, posters } = json;

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
      .map(({ id, key, name, type }) => ({
        id,
        link: `https://www.youtube.com/watch?v=${key}`,
        name,
        type,
      }));
  };

  return {
    id,
    title,
    tagline,
    overview,
    reviews: reviewsFilter(reviews),
    images: imagesFilter(images),
    videos: videosFilter(videos.results),
    year: release_date,
    votes: vote_average,
  };
};

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
