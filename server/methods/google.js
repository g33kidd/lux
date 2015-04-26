Meteor.methods({

  getAccounts: function(user) {
    var api = Lux.Analytics.Google;
    var accounts = api.getAccounts(Meteor.user());
    console.log(accounts);
    return accounts;
  }

});