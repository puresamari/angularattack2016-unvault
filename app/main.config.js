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
        var url = 'home.json';
        switch (e) {
            case 'register':
                url = 'users/add';
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
    vm.user = {};
    Data.get('general', function(result){
        vm.user = result.data.user;
    });
});