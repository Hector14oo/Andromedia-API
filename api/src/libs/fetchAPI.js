import { options, postOptions, deleteOptions } from '../config.js';

const object = {
  GET: options,
  POST: postOptions,
  DELETE: deleteOptions,
};

export const fetchAPI = async (URL, method = 'GET', body) => {
  try {
    const response = await fetch(URL, { ...object[method], body });
    const data = await response.json(response);
    return data;
  } catch (error) {
    return error;
  }
};