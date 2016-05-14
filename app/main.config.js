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
            case 'user':
                url = 'users.json';
                break;
        }
        var req = {
            method: 'GET',
            url: 'http://52.39.11.99/' + url,
            headers: {
                'accept': 'application/json',
//                'Authorization': localStorage.token
            }
        };
        console.log('requesting', req)
        return $http(req).then( _promise );
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
        var req = {
            method: 'POST',
            url: 'http://52.39.11.99/' + url,
            data: data,
            headers: {
                'accept': 'application/json'
            }
        };
        console.log('sending', req);
        return $http(req).then( _promise );
    };
    
    return service;
});

app.controller('MainCtrl', function(Data){
    var vm = this;
    vm.token = '';
});