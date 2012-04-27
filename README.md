# Meteor Scoreboard example with CoffeeScript, Compass, Bootstrap and Guard gems

A port of the [Meteor](http://meteor.com/) framework's [Leaderboard example](http://meteor.com/examples/leaderboard) rewritten using [CoffeeScript](http://coffeescript.org/), [Compass](http://compass-style.org/) and Twitter [Bootstrap](http://twitter.github.com/bootstrap/) and [Guard](https://github.com/guard/guard) gems.

## Installation

Install Meteor:

  curl install.meteor.com | /bin/sh

Clone the repository:

  git clone git@git:sandbox/scoreboard.git

Add jQuery as a add-on packages

  meteor add jquery

Run guard command to watch for file changes
  
  guard -g ui
  

To start the project in the built-in Meteor server:
  
  meteor run
