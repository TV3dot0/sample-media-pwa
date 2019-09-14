// session.js - do not use in production!
// @see https://cloud.google.com/nodejs/getting-started/authenticate-users
module.exports = {
    resave: false,
    saveUninitialized: false,
    secret: 'totallyasecret',
    signed: true,
    memcacheURL: 'localhost:11211'
};