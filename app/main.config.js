app.config(function($mdThemingProvider) { 
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('yellow');
});

app.factory('Data', function($http, $rootScope) {
    var service = {};
    
    service.get = function(e, _promise, data) {
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
            case 'card':
                url = data + '/card.json';
                break;
            case 'cards':
                url = '/cards.json';
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
        console.log('getting', req)
        return $http(req).then( _promise );
    };
    
    service.delete = function(e, _promise, data) {
        var url = '';
        switch (e) {
            case 'card':
                url = data.selectedCard + '/delete-card.json';
                break;
        }
        var req = {
            method: 'DELETE',
            url: 'http://52.39.11.99/' + url,
            headers: {
                'accept': 'application/json'
            }
        };
        console.log('deleting', req);
        return $http(req).then( _promise );
    };
    
    service.send = function(e, data, _promise) {
        var url = '',
            senddata = data;
        switch (e) {
            case 'register':
                url = 'users/add';
                break;
            case 'login':
                url = 'users/login';
                break;
            case 'add-card':
                url = 'add-card.json';
                senddata = data;
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
    
    service.put = function(e, data, _promise) {
        var url = '',
            data = data;
        switch (e) {
            case 'update-card':
                url = data.selectedCard + '/update-card.json';
                data = data.model;
                break;
        }
        var req = {
            method: 'PUT',
            url: 'http://52.39.11.99/' + url,
            data: data,
            headers: {
                'accept': 'application/json'
            }
        };
        console.log('putting', req);
        return $http(req).then( _promise );
    };
    
    return service;
});

app.controller('MainCtrl', function(Data){
    var vm = this;
    vm.token = '';
});