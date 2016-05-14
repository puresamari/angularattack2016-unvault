function LoginCtrl($scope, Data) {
    var vm = this;
    vm.model = {
        'email': '',
        'password': '',
    };
    
    vm.send = function(){
        Data.send('login', vm.model, function (result) {
            alert('login return: ', result);
        });
    };
 }

app.controller('LoginCtrl', LoginCtrl);