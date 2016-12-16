'use strict';
const _ = require('lodash');
const rp = require('request-promise');
const ENDPOINT = 'http://www.omdbapi.com';

function MovieInfoHelper() { }

MovieInfoHelper.prototype.requestMovieInfo = function(name) {
    return this.getMovieInfo(name).then(
        function(response) {
            console.log(`success - received movie info for ${name}`);
            return response.body;
        }
    );
};

MovieInfoHelper.prototype.getMovieInfo = function(name) {
    const options = {
        method: 'GET',
        qs: {
            t: name,
            plot: 'short',
            tomatoes: true,
            r: 'json'
        },
        uri: ENDPOINT,
        resolveWithFullResponse: true,
        json: true
    };
    return rp(options);
};

MovieInfoHelper.prototype.formatMovieInfo = function(name, movieInfo) {
    if (movieInfo.Error) {
        return `I didn't have data for a movie or television show by the name of ${mediaName}`;
    }

    return _.template('The main actors in ${title} are ${actors}')({
        title: movieInfo.Title,
        actors: movieInfo.Actors
    });
};

module.exports = MovieInfoHelper;