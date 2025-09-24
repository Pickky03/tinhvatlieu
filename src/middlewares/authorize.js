export const authorize =
  (...roles) =>
  (req, res, next) => {
    const user = req.user;
    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ message: 'Forbidden - Not enough permission' });
    }
    next();
  };