Data = {
  google: new Meteor.Collection('google-data')
};

GoogleAnalytics = {
  metrics: [],
  dimensions: [],
  fields: [],
  sampling: "HIGHER_PRECISION"
};

Meteor.methods({
  getGaAccounts: function() {
    var GAPI = Lux.Analytics.Google;
    var primaryAccount = Meteor.users.findOne({primaryAccount: true});
    var accounts = GAPI.management.getAccounts(primaryAccount);
    var properties = GAPI.mangement.getProperties(primaryAccount);
  },

  getGaProperties: function() {
    // GAPI call
  },

  getGaProfiles: function() {
    // GAPI call
  }
});