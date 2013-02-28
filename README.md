# Meteor Scoreboard example with CoffeeScript, Compass, Bootstrap and Guard gems

A port of the [Meteor](http://meteor.com/) framework's [Leaderboard example](http://meteor.com/examples/leaderboard) rewritten using [CoffeeScript](http://coffeescript.org/), [Compass](http://compass-style.org/) and Twitter [Bootstrap](http://twitter.github.com/bootstrap/) and [Guard](https://github.com/guard/guard) gems.

## Installation

Install Meteor:

```bash
  $ curl install.meteor.com | /bin/sh
```

Clone the repository:

```bash
  $ git clone git@git:gdumitrescu/scoreboard.git
```

Add jQuery as a add-on packages:

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
