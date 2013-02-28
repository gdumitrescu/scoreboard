Players = new Meteor.Collection 'players'

reset_data = -> # Executes on both client and server.
  Players.remove {}
  names = [ 'Team1'
            'Team2'
            'Team3'
            'Team4'
            'Team5'
            'Team6'
            'Team7'
            'Team8'
            'Team9'
          ]
  for name in names
    Players.insert
      name: name
      cat01: 0
      cat02: 0
      cat03: 0
      cat04: 0
      cat05: 0
      score: 0

if Meteor.is_client

  $.extend Template.navbar,
    events:
      'click .sort_by_name': -> Session.set 'sort_by_name', true
      'click .sort_by_score': -> Session.set 'sort_by_name', false
      'click .reset_data': -> reset_data()

  $.extend Template.scoreboard,
    players: ->
      sort = if Session.get('sort_by_name') then name: 1 #else score: -1
      Players.find {}, sort: sort
      
  $.extend Template.player,
    events:
      'click #increment01': -> Players.update @_id, $inc: {cat01: 1, score: 1}
      'click #increment02': -> Players.update @_id, $inc: {cat02: 1, score: 1}
      'click #increment03': -> Players.update @_id, $inc: {cat03: 1, score: 1}
      'click #increment04': -> Players.update @_id, $inc: {cat04: 1, score: 1}
      'click #increment05': -> Players.update @_id, $inc: {cat05: 1, score: 1}
      
      'click': -> $('.tooltip').remove()  # To prevent zombie tooltips.
      
    enable_tooltips: ->
      # Update tooltips after the template has rendered.
      Meteor.defer -> $('[rel=tooltip]').tooltip()
      ''

# On server startup, create some players if the database is empty.
if Meteor.is_server
  Meteor.startup ->
    reset_data() if Players.find().count() is 0
