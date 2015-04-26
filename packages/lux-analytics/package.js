Package.describe({
  name: 'lux-analytics',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use(['http', 'underscore']);

  api.addFiles(['lib/google.js', 'lib/sync.js', 'lib/google/api.js'], 'server');
  api.addFiles('lux-analytics.js');

  api.export(['GoogleAnalytics'], 'server');
  api.export('Lux', ['client', 'server']);
});