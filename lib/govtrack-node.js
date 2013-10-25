var url = require('url')
  , querystring = require('querystring')
  , request = require('request');

var API_BASE_PATH = 'http://www.govtrack.us/api/v2/';

var GovTrack = function() {};

var get = function(subPath, callback) {
  request(url.resolve(API_BASE_PATH, subPath), function (error, response, body) {
    if (error) {
      return callback(error);
    } else {
      try {
        var json = JSON.parse(body);
      } catch (e) {
        return callback(new Error('JSON parse error: ' + body));
      }

      callback(null, json);
    }
  });
}

var stringifyParams = function(params) {
  var id = null;
  var paramsCopy = {};

  if (typeof params === 'number') {
    id = params;
  } else {
    var keys = Object.keys(params);

    // extract id out of params if it exists
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] !== 'id') {
        paramsCopy[keys[i]] = params[keys[i]];
      } else {
        id = params[keys[i]];
      }
    }
  }

  var qs = '';

  if (id) {
    qs += id;
  }

  qs += '?' + querystring.stringify(paramsCopy);
  return qs;
}

GovTrack.prototype.findBill = function(params, callback) {
  return get('bill/' + stringifyParams(params), callback);
}

GovTrack.prototype.findCosponsorship = function(params, callback) {
  return get('cosponsorship/' + stringifyParams(params), callback);
}

GovTrack.prototype.findPerson = function(params, callback) {
  return get('person/' + stringifyParams(params), callback);
}

GovTrack.prototype.findRole = function(params, callback) {
  return get('role/' + stringifyParams(params), callback);
}

GovTrack.prototype.findVote = function(params, callback) {
  return get('vote/' + stringifyParams(params), callback);
}

GovTrack.prototype.findVoteVoter = function(params, callback) {
  return get('vote_voter/' + stringifyParams(params), callback);
}

module.exports = new GovTrack();
