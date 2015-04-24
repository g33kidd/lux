Package.describe({
  name: 'lux-core',
  version: '0.0.1',
  summary: 'Lux Core provides main features to be used when creating a dashboard.',
  git: 'https://github.com/g33kidd/lux-core',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles(['lib/main.js'], 'server');
  api.addFiles('lux-core.js');
});