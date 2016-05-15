function LoginCtrl($scope, $rootScope, Data, Error) {
    var vm = this;
    
    vm.model = {
        'email': '',
        'password': '',
    };
    
    function setUser(user) {              
        localStorage.setItem('token', 'Bearer ' + user.token);
        localStorage.setItem('id', user.id);
    }
    
    vm.send = function(){
        Data.send('login', vm.model, function (response) {
            console.log(response.data.user);
        }, function error(response){
            Error.alert('Login Error', 'An Error has occured while logging in, maybe try a different User or Password');
        });
    };
 }

app.controller('LoginCtrl', LoginCtrl);