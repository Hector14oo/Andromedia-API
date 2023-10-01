import { imagesFromList } from './assets.js';
import { movieBasicDetails } from './movie.js';
import { genders } from '../../constants/genders.js';

export const personBasicDetails = (person, lang) => {
  const { adult, id, name, profile_path, media_type } = person;

  return {
    adult,
    id,
    name,
    image: {
      light: `https://image.tmdb.org/t/p/w185${profile_path}`,
      original: `https://image.tmdb.org/t/p/original${profile_path}`,
    },
    type: media_type,
    url: `http://localhost:1234/api/media/person/${id}${lang ? '?lang=' + lang : ''}`,
  };
};

export const personExtraDetails = (person, lang) => {
  const {
    adult,
    id,
    name,
    gender,
    place_of_birth,
    birthday,
    deathday,
    biography,
    known_for_department,
    images,
    combined_credits,
  } = person;

  const appearences = () => {
    const { cast, crew } = combined_credits;

    return {
      cast: cast.map(({ credit_id, character, ...movie }) => ({
        creditId: credit_id,
        character,
        ...movieBasicDetails(movie, lang),
      })),
      crew: crew.map(({ credit_id, department, job, ...movie }) => ({
        creditId: credit_id,
        department,
        job,
        ...movieBasicDetails(movie),
      })),
    };
  };

  return {
    adult,
    id,
    name,
    gender: genders[gender],
    birthplace: place_of_birth,
    birthday,
    deathday,
    biography,
    role: known_for_department,
    images: imagesFromList(images.profiles),
    appearences: appearences(),
  };
};
