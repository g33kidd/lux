// Settings = {
//   collection: new Mongo.Collection('settings')
// };

// Settings.get = function(setting, defaultValue) {
//   var settings = Settings.collection.find().fetch()[0];
//   if(Meteor.isServer && Meteor.settings && !!Meteor.settings[setting]) {
//     return Meteor.settings[setting];
//   }else if(Meteor.settings && Meteor.settings.public && !!Meteor.settings.public[setting]) {
//     return Meteor.settings.public[setting];
//   }else if(settings && (typeof settings[setting] !== 'undefined')) {
//     return settings[setting];
//   }else if(typeof defaultValue !== 'undefined') {
//     return defaultValue;
//   }else{
//     return undefined;
//   }
// };