# budget-pwa

## Description
This is a full stack Progressive Web App that is a simple budget tracker meant to track expenses.  The use of indexedDB and the serviceworker and manifest files give this app offline functionality so that it can be used if/when the user has no internet connection and any data that is added while offline, is temporarily stored in the indexedDB.  Once the user is back online, the data from the indexedDB is synced with the Mongo database.

## Technologies
Javascript, HTML, CSS, Bootstrap, Node.js, MongoDB, indexedDB and the following dependencies:
* mongoose
* express
* morgan

## Installation
After cloning the repository, run `npm install` to install all dependencies.  Make sure you have mongo and then run `node server.js` to run locally.  

## Demo

[Try out the deployed app]( https://guarded-ridge-79136.herokuapp.com/)
The app will still work offline if you switch to offline mode in your devtools.