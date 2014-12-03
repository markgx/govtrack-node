# GovTrack Node

[![Build Status](https://travis-ci.org/markgx/govtrack-node.svg?branch=master)](https://travis-ci.org/markgx/govtrack-node)
[![Dependency Status](https://david-dm.org/markgx/govtrack-node.svg)](https://david-dm.org/markgx/govtrack-node)

A Node.js wrapper for the [GovTrack](http://www.govtrack.us) data API.

## Install

```
npm install govtrack-node
```

## Usage

```js
// include the module
var govTrack = require('govtrack-node');

// list current members of Congress
govTrack.findRole({ current: true }, function(err, res) {
  if (!err) {
    // res contains JSON data response
  }
});

govTrack.findPerson({ gender: 'male', lastname: 'smith' }, function(err, res) {
  if (!err) {
    // res contains JSON data response
  }
});
```

## API

This module mirrors the GovTrack API endpoints as detailed at http://www.govtrack.us/developers/api. Please refer to this link for more information on available parameters and the returned data.

Each function takes two parameters -- 1) `params` which can either be an ID number or an object which contain key-value pairs to filter on and 2) a `callback` function which will be invoked after the API call is made. `callback` will be passed `err` and `res` as its parameters. `err` will hold any error information if an error occurs during the call and `res` will contain a JSON object containing the query result if successful.

### Bill

`findBill(params, callback)`: More info at http://www.govtrack.us/developers/api#endpoint_bill

### Cosponsorship

`findCosponsorship(params, callback)`: More info at http://www.govtrack.us/developers/api#endpoint_cosponsorship

### Person

`findPerson(params, callback)`: More info at http://www.govtrack.us/developers/api#endpoint_person

### Role

`findRole(params, callback)`: More info at http://www.govtrack.us/developers/api#endpoint_role

### Vote

`findVote(params, callback)`: More info at http://www.govtrack.us/developers/api#endpoint_vote

### Vote Voters

`findVoteVoter(params, callback)`: More info at http://www.govtrack.us/developers/api#endpoint_vote_voter

## License

Data is provided by GovTrack. You must agree to their Data Terms of Service located at http://www.govtrack.us/developers/license.

This module is released under the [MIT License](http://www.opensource.org/licenses/MIT).

Copyright 2013 Mark Guerra <markgx@gmail.com>.
