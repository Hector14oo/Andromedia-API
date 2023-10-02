import { options } from '../config.js';

export const fetchAPI = async (URL) => {
  try {
    const response = await fetch(URL, options);
    const data = await response.json(response);
    return data;
  } catch (error) {
    return error;
  }
};
