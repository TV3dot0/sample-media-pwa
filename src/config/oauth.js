// oauth.js - do not use in production!
// @see https://cloud.google.com/nodejs/getting-started/authenticate-users
module.exports = {
    clientID: 'lolztehclientid',
    clientSecret: 'suchhiddenmanysecretwow',
    callbackURL: 'http://localhost:8080/auth/google/callback',
    accessType: 'offline'
};
