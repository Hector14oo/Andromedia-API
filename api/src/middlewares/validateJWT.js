import jwt from 'jsonwebtoken';

export function validateJWT(req, res, next) {
  const { token } = req.cookies;

  if (!token)
    return res
      .status(401)
      .json({ message: 'Invalid token, authorization denied' });

  jwt.verify(
    token,
    globalThis.process.env.JWT_SECRET_KEY,
    (err, decodeUser) => {
      if (err) return res.status(403).json({ message: err.message });
      req.user = decodeUser;
    }
  );

  next();
}
