import jwt from 'jsonwebtoken';

export function createJWT(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      globalThis.process.env.JWT_SECRET_KEY,
      { expiresIn: '1d' },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
