export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      globalThis.process.env.API_KEY,
  },
};