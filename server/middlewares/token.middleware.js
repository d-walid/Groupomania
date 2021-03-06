const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './config/.env' });

function tokenGeneration(user) {
  // Génération de token.
  const id = user.id;
  const expiresIn = '24h';
  const payload = { sub: id, iat: Date.now() };
  const signedToken = jwt.sign(payload, process.env.JWT_SECRET_TOKEN, {
    expiresIn: expiresIn
  });
  return {
    token: signedToken,
    expires: expiresIn
  };
}

function getUserIdFromToken(req) {
  // Fonction qui récupère l'id de l'utilisateur par rapport au token.
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
  const userId = decodedToken.sub;
  return userId;
}

module.exports.tokenGeneration = tokenGeneration;
module.exports.getUserIdFromToken = getUserIdFromToken;
