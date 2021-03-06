## Meteor Scoreboard example with CoffeeScript, Compass, Bootstrap and Guard gems 
[![Gitter chat](https://badges.gitter.im/join chat.svg)](https://gitter.im/gdumitrescu/scoreboard)

[![wercker status](https://app.wercker.com/status/136bc2d730466ac09525a3ddb2e65ed0/m/master "wercker status")](https://app.wercker.com/project/bykey/136bc2d730466ac09525a3ddb2e65ed0)

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

Run bundler command:

```bash
  $ bundle install 
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

- Install Meteor using Nitours.IO [autoparts](https://github.com/action-io/autoparts) feature 

```bash
$ parts install meteor
```

- Install meteorite on Nitrous.IO (Note: version 0.6 or lower)

```bash
$ npm install -g meteorite
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
$ heroku create <herokuappname> --stack cedar --buildpack https://github.com/jordansissel/heroku-buildpack-meteor.git

$ heroku config:set MONGO_URL=mongodb://<username>:<password>@<hostname>.mongolab.com:<port>/<database>

$ heroku config:set ROOT_URL=<herokuappname>.herokuapp.com

$ git push heroku master
```

[![endorse](http://api.coderwall.com/gdumitrescu/endorsecount.png)](http://coderwall.com/gdumitrescu)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/gdumitrescu/scoreboard/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

