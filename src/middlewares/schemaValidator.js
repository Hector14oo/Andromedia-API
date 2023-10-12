export const schemaValidator = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ success: false, errors: error.issues.map((err) => ({ field: err.path.join(" > "), message: err.message }))});
  }
};
