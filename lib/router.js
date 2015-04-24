Router.configure({
	layoutTemplate: 'layoutMain',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('home', {
  path: '/'
});