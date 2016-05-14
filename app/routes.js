app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('main', {
//            abstract: true,
            url: '/',
            template: require('./app.component.html'),
            controller: 'AppCtrl as app'
        });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        requireLinks: false
    });
});