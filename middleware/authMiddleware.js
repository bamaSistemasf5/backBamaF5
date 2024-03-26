import jwt from 'jsonwebtoken';

 const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token == null) return res.status(401).json({ message: 'Se requiere token de autenticación' });

  jwt.verify(token, 'codesecret', (err, user) => {
    if (err) return res.status(403).json({ message: 'Token no válido' });
    req.user = user;
    next();
  });
};

export default authenticateToken;