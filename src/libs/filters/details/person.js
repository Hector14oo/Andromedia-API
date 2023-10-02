import { imagesFromList } from './extras/assets.js';
import { movieBasicDetails } from './movie.js';
import { genders } from '../../constants/genders.js';

export const personBasicDetails = ({ data, lang }) => {
  const { adult, id, name, profile_path, media_type } = data;

  return {
    adult,
    id,
    name,
    image: profile_path ? {
      light: `https://image.tmdb.org/t/p/w185${profile_path}`,
      original: `https://image.tmdb.org/t/p/original${profile_path}`,
    } : null,
    type: media_type,
    url: `${globalThis.process.env.HOST}/api/media/person/${id}?lang=${lang}`,
  };
};

export const personExtraDetails = ({ data, lang }) => {
  const { adult, id, name, gender, place_of_birth, birthday, deathday, biography, known_for_department, images, combined_credits } = data;

  const appearences = () => {
    const { cast, crew } = combined_credits;

    return {
      cast: cast.map(({ credit_id, character, ...movie }) => ({ creditId: credit_id, character, ...movieBasicDetails(movie, lang) })),
      crew: crew.map(({ credit_id, department, job, ...movie }) => ({ creditId: credit_id, department, job, ...movieBasicDetails(movie) })),
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
