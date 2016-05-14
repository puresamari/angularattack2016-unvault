function RegisterCtrl($scope, Data) {
    var vm = this;
    vm.model = {
        "email": "",
        "password ": "",
        "full_name": ""
    };
    vm.send = function(){
        Data.send('register', vm.model, function (response) {
            alert('registered: ', response);
        });
    };
}

app.controller('RegisterCtrl', RegisterCtrl);
