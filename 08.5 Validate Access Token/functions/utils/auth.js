const jwt = require('jsonwebtoken');
const jwks = require('jwks-rsa');
const { promisify } = require('util');
const jwksClient = jwks({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
});

let signingKey;
const getAccessTokenFromHeaders = (headers) => {
    const rawAuthorization = headers.authorization;
    if (!rawAuthorization) {
        return null;
    }
    const authorizationParts = rawAuthorization.split(' ');
    if (authorizationParts[0] !== 'Bearer' || authorizationParts.length !== 2) {
        return null;
    }
    const accessToken = authorizationParts[1];
    return accessToken;
};

const validateAccessToken = async (token) => {
    if (!signingKey) {
        try {
            const getSigningKey = promisify(jwksClient.getSigningKey);
            const key = await getSigningKey(process.env.AUTH0_KEY_ID);
            signingKey = key.getPublicKey();
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    try {
        const decoded = jwt.verify(token, signingKey);
        return decoded;
    } catch (err) {
        console.error(err);
        return null;
    }
};

module.exports = {
    getAccessTokenFromHeaders,
    validateAccessToken,
};
