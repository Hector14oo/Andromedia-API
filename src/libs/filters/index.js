import { BasicDetails, ExtraDetails, seasonExtraDetails } from './details/index.js';

export const getDetailsFromList = (data, lang) => {
  const { page, results, total_pages, total_results } = data;

  const filteredList = results.map((data) => BasicDetails[data.media_type]({data, lang})).filter((media) => media !== null);

  return {
    page,
    results: filteredList,
    totalResults: total_pages,
    totalPages: total_results,
  };
};

export const getDetails = ({ data, mediaType, lang }) => {
  const { reviews, credits } = data;
  return ExtraDetails[mediaType]({data, reviews, credits, lang})
};

export const getSeasonDetails = (data) => {
  return seasonExtraDetails(data);
};
