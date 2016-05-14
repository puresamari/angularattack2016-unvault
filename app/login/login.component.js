function LoginCtrl($scope, Data) {
    var vm = this;
    vm.model = {
        'email': '',
        'password': '',
    };
    
    vm.send = function(){
        Data.send('login', vm.model, function (response) {
            console.log(response.message);
        });
    };
 }

app.controller('LoginCtrl', LoginCtrl);