app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('landing', {
            url: '/',
            template: require('./landing/landing.component.html'),
            controller: 'LandingCtrl as landing'
        })
        .state('login', {
            url: '/login',
            template: require('./login/login.component.html'),
            controller: 'LoginCtrl as login'
        })
        .state('register', {
            url: '/register',
            template: require('./register/register.component.html'),
            controller: 'RegisterCtrl as register'
        })
        .state('manage-cards', {
            url: '/manage-cards',
            template: require('./manage-cards/manage-cards.component.html'),
            controller: 'ManageCardsCtrl as manageCards'
        })
        .state('app', {
            abstract: true,
            url: '/app',
            template: require('./app/app.component.html'),
            controller: 'AppCtrl as app'
        })
        .state('app.home', {
            url: '',
            template: require('./home/home.component.html'),
            controller: 'HomeCtrl as home'
        })
        .state('app.market', {
            url: '/market',
            template: require('./market/market.component.html'),
            controller: 'MarketCtrl as market'
        })
        .state('app.cards', {
            url: '/cards',
            template: require('./cards/cards.component.html'),
            controller: 'CardsCtrl as cards'
        })
        .state('app.user', {
            url: '/user',
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