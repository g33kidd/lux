Template.home.events({
  'click #getAccounts': function(evt, tmpl) {
    if(!Meteor.user()) {
      Meteor.loginWithGoogle({
        requestPermissions: LOGIN_SCOPE,
        requestOfflineToken: true,
        forceApprovalPrompt: true
      });
    }

    Meteor.call('getAccounts', Meteor.user(), function(error, result) {
      if(error)
        console.log(error.reason);
      console.log(result);
    });
  }
});