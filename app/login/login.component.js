function LoginCtrl($scope, $rootScope, Data) {
    var vm = this;
    vm.model = {
        'email': '',
        'password': '',
    };
    
    vm.send = function(){
        Data.send('login', vm.model, function (response) {
            localStorage.setItem('token', response.data.message.token);
            console.log(response, localStorage.token);
        });
    };
 }

app.controller('LoginCtrl', LoginCtrl);