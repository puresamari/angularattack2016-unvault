app.config(function($mdThemingProvider) { 
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('yellow');
});

app.factory('Data', function($http, $rootScope) {
    var service = {};
    
    service.get = function(e, _promise) {
        var url = 'home.json';
        switch (e) {
            case 'general':
                url = 'home.json';
                break;
            case 'logout':
                url = 'users/logout';
                break;
        }
        return $http({
                method: 'GET',
                url: 'http://52.39.11.99/' + url,
                headers: {
                    'accept': 'application/json'
                }
            })
            .then( _promise );
    };
    
    service.send = function(e, data, _promise) {
        var url = '';
        switch (e) {
            case 'register':
                url = 'users/add';
                break;
            case 'login':
                url = 'users/login';
                break;
        }
        return $http({
                method: 'POST',
                url: 'http://52.39.11.99/' + url,
                data: data,
                headers: {
                    'accept': 'application/json'
                }
            })
            .then( _promise );
    };
    
    return service;
});

app.controller('MainCtrl', function(Data){
    var vm = this;
});