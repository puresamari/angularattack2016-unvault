app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            template: require('./login/login.component.html'),
            controller: 'LoginCtrl as login'
        })
        .state('app', {
            url: '/',
            template: require('./app/app.component.html'),
            controller: 'AppCtrl as app'
        })
        .state('app.home', {
            url: 'home',
            template: require('./home/home.component.html'),
            controller: 'HomeCtrl as home'
        })
        .state('app.market', {
            url: 'market',
            template: require('./market/market.component.html'),
            controller: 'MarketCtrl as market'
        })
        .state('app.cards', {
            url: 'cards',
            template: require('./cards/cards.component.html'),
            controller: 'CardsCtrl as cards'
        })
        .state('app.user', {
            url: 'user',
            template: require('./user/user.component.html'),
            controller: 'UserCtrl as user'
        });
    $urlRouterProvider.otherwise('/app');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        requireLinks: false
    });
});