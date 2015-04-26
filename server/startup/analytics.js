Meteor.startup(function() {
  var gaMetrics = GoogleAnalytics.metrics;
  var gaDimensions = GoogleAnalytics.dimensions;
  var gaFields = GoogleAnalytics.fields;

  if(gaMetrics.length <= 0) {
    GoogleAnalytics.metrics.push('ga:visits');
    GoogleAnalytics.metrics.push('ga:sessions');
    GoogleAnalytics.metrics.push('ga:pageviews');
  }

  if(gaDimensions.length <= 0) {
    GoogleAnalytics.dimensions.push('ga:nthMonth');
    // GoogleAnalytics.dimensions.push('ga:nthDay');
  }
});

ServiceConfiguration.configurations.remove({
  service: 'google'
});

ServiceConfiguration.configurations.insert({
  service: 'google',
  loginStyle: 'popup',
  clientId: Meteor.settings.google.clientId,
  secret: Meteor.settings.google.secret
});