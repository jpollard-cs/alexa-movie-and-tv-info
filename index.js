'use strict';
module.change_code = 1;
const _ = require('lodash');
const Alexa = require('alexa-app');
const app = new Alexa.app('movieinfo');
const MovieInfoHelper = require('./movie_info_helper');

app.launch(function(req, res) {
    const prompt = 'For a list of the main actors, tell me the name of the movie or television series you are interested in.';
    res.say(prompt).reprompt(prompt).shouldEndSession(false);
});

app.intent('movieinfo', {
        'slots': {
            'MEDIANAME': 'MEDIATITLE'
        },
        'utterances': ['{|actors|stars} {|for} {-|MEDIANAME}']
    },
    (req, res) => {
        //get the slot
        const mediaName = req.slot('MEDIANAME');
        const reprompt = 'Tell me the name of the movie or television series to get a list of main actors.';
        if (_.isEmpty(mediaName)) {
            const prompt = `I didn't hear a name. Please give me the name of a movie or television series.`;
            res.say(prompt).reprompt(reprompt).shouldEndSession(true);
            return true;
        } else {
            const mediaHelper = new MovieInfoHelper();
            mediaHelper.requestMovieInfo(mediaName).then((mediaInfo) => {
                console.log(mediaInfo);
                res.say(mediaHelper.formatMovieInfo(mediaInfo)).send();
            }).catch(function(err) {
                console.log(err.statusCode);
                const prompt = `I didn't have data for a movie or television show by the name of ${mediaName}`;
                res.say(prompt).reprompt(reprompt).shouldEndSession(false).send();
            });
            return false;
        }
    }
);

//hack to support custom utterances in utterance expansion string
var utterancesMethod = app.utterances;
app.utterances = function() {
    return utterancesMethod().replace(/\{\-\|/g, '{');
};

module.exports = app;