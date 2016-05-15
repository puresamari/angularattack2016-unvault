function RegisterCtrl($scope, Data, $state) {
    var vm = this;
    vm.model = {
        "email": "",
        "password ": "",
        "full_name": ""
    };
    vm.send = function(){
        Data.send('register', vm.model, function (response) {
            $state.go('login');
            console.log(response);
        });
    };
}

app.controller('RegisterCtrl', RegisterCtrl);
