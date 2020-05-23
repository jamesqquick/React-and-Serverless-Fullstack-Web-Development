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

module.exports = {
    getAccessTokenFromHeaders,
};
