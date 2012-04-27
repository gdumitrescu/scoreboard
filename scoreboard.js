(function() {
  var Players, reset_data;

  Players = new Meteor.Collection('players');

  reset_data = function() {
    var name, names, _i, _len, _results;
    Players.remove({});
    names = ['Team1', 'Team2', 'Team3', 'Team4', 'Team5', 'Team6', 'Team7', 'Team8', 'Team9'];
    _results = [];
    for (_i = 0, _len = names.length; _i < _len; _i++) {
      name = names[_i];
      _results.push(Players.insert({
        name: name,
        cat01: 0,
        cat02: 0,
        cat03: 0,
        cat04: 0,
        cat05: 0,
        score: 0
      }));
    }
    return _results;
  };

  if (Meteor.is_client) {
    $.extend(Template.navbar, {
      events: {
        'click .sort_by_name': function() {
          return Session.set('sort_by_name', true);
        },
        'click .sort_by_score': function() {
          return Session.set('sort_by_name', false);
        },
        'click .reset_data': function() {
          return reset_data();
        }
      }
    });
    $.extend(Template.scoreboard, {
      players: function() {
        var sort;
        sort = Session.get('sort_by_name') ? {
          name: 1
        } : void 0;
        return Players.find({}, {
          sort: sort
        });
      }
    });
    $.extend(Template.player, {
      events: {
        'click #increment01': function() {
          return Players.update(this._id, {
            $inc: {
              cat01: 1,
              score: 1
            }
          });
        },
        'click #increment02': function() {
          return Players.update(this._id, {
            $inc: {
              cat02: 1,
              score: 1
            }
          });
        },
        'click #increment03': function() {
          return Players.update(this._id, {
            $inc: {
              cat03: 1,
              score: 1
            }
          });
        },
        'click #increment04': function() {
          return Players.update(this._id, {
            $inc: {
              cat04: 1,
              score: 1
            }
          });
        },
        'click #increment05': function() {
          return Players.update(this._id, {
            $inc: {
              cat05: 1,
              score: 1
            }
          });
        },
        'click': function() {
          return $('.tooltip').remove();
        }
      },
      enable_tooltips: function() {
        Meteor.defer(function() {
          return $('[rel=tooltip]').tooltip();
        });
        return '';
      }
    });
  }

  if (Meteor.is_server) {
    Meteor.startup(function() {
      if (Players.find().count() === 0) return reset_data();
    });
  }

}).call(this);
