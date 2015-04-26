Lux = {
  Analytics: {
    Google: {
      _host: "https://www.googleapis.com/",
      _analytics: "analytics/v3/data/ga",
      _management: "analytics/v3/management/accounts/",

      _callAndRefresh: function(method, path, options, callback) {
        var self = this;
        options = options || {};

        self._call(method, path, options, Meteor.bindEnvironment(function(error, result) {
          if(error && error.response && error.response.statusCode == 401) {
            return self._refresh(options.user, function(error) {
              if(error) {
                return callback(error);
              }

              if(options.user) {
                options.user = Meteor.users.findOne(options.user._id);
              }

              self._call(method, path, options, callback);
            });
          }else{
            callback(error, result);
          }
        }, "Google Api callAndRefresh"));
      },

      _call: function(method, path, options, callback) {
        options = options || {};
        var user = options.user || Meteor.user();

        if(user && user.services && user.services.google && user.services.google.accessToken) {
          options.headers = options.headers || {};
          options.headers.Authorization = 'Bearer ' + user.services.google.accessToken;

          HTTP.call(method, path, options, function(error, result) {
            callback(error, result && result.data);
          });
        }else{
          callback(new Meteor.Error(403, "Auth token not found." + "Connect your google account."));
        }
      },

      _exchangeRefreshToken: function(user) {},
      _refresh: function(user, callback) {},

      getData: function(options) {},
      getAccounts: function(user) {
        options = {user: user};
        var path = this._host + this._management;
        console.log(path);
        call = Meteor.wrapAsync(this._callAndRefresh('get', path, options, function(error, result) {
          console.log(error);
          console.log(result);
        }));
      },
      getProperties: function(user) {}

    }
  }
};