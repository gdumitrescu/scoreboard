#tests/scoreboard.js

assert = require("assert")

suite "Players", ->
  test "in the server", (done, server) ->
    server.eval ->
      Players.insert name: "john smith"
      docs = Posts.find().fetch()
      emit "players", players

    server.once "players", (players) ->
      assert.equal players.length, 1
      done()


