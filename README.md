## Meteor Scoreboard example with CoffeeScript, Compass, Bootstrap and Guard gems 

[![Codeship Status for gdumitrescu/scoreboard](https://www.codeship.io/projects/617dc4f0-d47a-0130-04fb-367a6d09b6f8/status?branch=master)](https://www.codeship.io/projects/5188)
[![Build Status](https://secure.travis-ci.org/gdumitrescu/scoreboard.png?branch=master)](http://travis-ci.org/gdumitrescu/scoreboard)
[![Coverage Status](https://coveralls.io/repos/gdumitrescu/scoreboard/badge.png?branch=master)](https://coveralls.io/r/gdumitrescu/scoreboard?branch=master)

A port of the [Meteor](http://meteor.com/) framework's [Leaderboard example](http://meteor.com/examples/leaderboard) rewritten using [CoffeeScript](http://coffeescript.org/), [Compass](http://compass-style.org/) and Twitter [Bootstrap](http://twitter.github.com/bootstrap/) and [Guard](https://github.com/guard/guard) gems.

### Development

Install Meteor:

```bash
  $ curl install.meteor.com | /bin/sh
```

Clone the repository:

```bash
  $ git clone git@git:gdumitrescu/scoreboard.git
```

Add an add-on packages (i.e jQuery):

```bash
  $ meteor add jquery
```

Run guard command to watch for file changes:

```bash
  $ [bundle exec] guard -g ui
```

To start the project in the built-in Meteor server:

```bash
  $ meteor [run]
```


### Deploy on Nitrous.IO and MongoLab

- Login to Nitrous.IO box and clone the repository

- Install meteorite on Nitrous.IO (Note: version 0.6 or lower)

```bash
$ npm install -g meteorite@0.6.0
```

- Add MongoLab account entries into ~/.bash_profile 

``` bash
export MONGODB_DEV_HOST=<hostname>.mongolab.com
export MONGODB_DEV_PORT=<port>
export MONGODB_DEV_USR=<username>
export MONGODB_DEV_PWD=<password>
export MONGODB_DEV_DB=<database>

export MONGODB_DEV_URI=mongodb://${MONGODB_DEV_USR}:${MONGODB_DEV_PWD}@${MONGODB_DEV_HOST}:${MONGODB_DEV_PORT}/${MONGODB_DEV_DB}
export MONGO_URL=${MONGODB_DEV_URI}
```

and reload .bash_profile and run meteorite


### Deploy on Heroku and MongoLab

- Clone the repository and change into that directory

- Run the following commands using Heroku Toolbelt

```bash
$ heroku create <herokuappname> --stack cedar --buildpack https://github.com/ondrej-kvasnovsky/heroku-buildpack-meteor.git

$ heroku config:set MONGO_URL=mongodb://<username>:<password>@<hostname>.mongolab.com:<port>/<database>

$ heroku config:set ROOT_URL=<herokuappname>.herokuapp.com

$ git push heroku master
```

[![endorse](http://api.coderwall.com/gdumitrescu/endorsecount.png)](http://coderwall.com/gdumitrescu)
