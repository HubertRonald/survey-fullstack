const functions = require('firebase-functions');
const app = require('./app')

// // Create and Deploy Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
exports.api = functions.region('us-central1').https.onRequest(app);


// localhost
// terminal:
// firebase serve --only functions
// https://github.com/firebase/firebase-tools/issues/1451