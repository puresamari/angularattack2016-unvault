app.config(function($mdThemingProvider) { 
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('yellow');
});

app.service('Error', function($mdDialog, $mdMedia) {
    var serv = {}
    
    serv.alert = function(title, message) {
        var customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.documentElement))
                .title(title)
                .textContent(message)
                .ariaLabel(title)
                .ok('OK')
        );
    };
    
    return serv;
});
app.factory('Data', function($http, $rootScope, $mdDialog, Error) {
    var service = {};
    
    function errorFn(response){
        Error.alert('Error', 'Encountered Error: ' + response.message);
        console.log('error: ', response);
    }
    
    service.get = function(e, data, _promise, _error) {
        var url = 'home.json';
        switch (e) {
            case 'general':
                url = 'home.json';
                break;
            case 'logout':
                url = 'logout';
                break;
            case 'user':
                url = localStorage.id + '/users.json';
                break;
            case 'card':
                url = data + '/card.json';
                break;
            case 'cards':
                url = '/cards.json';
                break;
        }
        var req = {
//            method: 'POST',
            method: 'GET',
            url: 'http://52.39.11.99/' + url,
            headers: {
                'accept': 'application/json',
                'Authorization': localStorage.token
            }
        };
        console.log('getting', req);
        if(_error == undefined) {
            _error = errorFn;
        }
        return $http(req).then( _promise , _error);
    };
    
    service.delete = function(e, _promise, data, _error) {
        var url = '';
        switch (e) {
            case 'card':
                url = data.selectedCard + '/delete-card.json';
                break;
        }
        var req = {
            method: 'POST',
//            method: 'DELETE',
            url: 'http://52.39.11.99/' + url,
            headers: {
                'accept': 'application/json'
            }
        };
        console.log('deleting', req);
        if(_error == undefined) {
            _error = errorFn;
        }
        return $http(req).then( _promise , _error );
    };
    
    service.send = function(e, data, _promise, _error) {
        var url = '',
            senddata = data;
        switch (e) {
            case 'register':
                url = 'users/add.json';
                break;
            case 'login':
                url = 'login.json';
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
        if(_error == undefined) {
            _error = errorFn;
        }
        return $http(req).then( _promise, _error );
    };
    
    service.put = function(e, data, _promise, _error) {
        var url = '',
            data = data;
        switch (e) {
            case 'update-card':
                url = data.selectedCard + '/update-card.json';
                data = data.model;
                break;
        }
        var req = {
            method: 'POST',
//            method: 'PUT',
            url: 'http://52.39.11.99/' + url,
            data: data,
            headers: {
                'accept': 'application/json'
            }
        };
        console.log('putting', req);
        if(_error == undefined) {
            _error = errorFn;
        }
        return $http(req).then( _promise , _error );
    };
    
    return service;
});

app.controller('MainCtrl', function(Data){
    var vm = this;
    vm.token = '';
});