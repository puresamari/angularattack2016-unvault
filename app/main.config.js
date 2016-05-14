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
            case 'home':
                url = 'home.json';
                break;
        }
        return $http
            .get('http://52.39.11.99/1/' + url)
            .then( _promise );
    };
    
    return service;
});

app.controller('MainCtrl', function(Data){
    var vm = this;
    vm.user = {};
    Data.get('home', function(result){
        console.log(result)
        vm.user = result.data;
    });
});