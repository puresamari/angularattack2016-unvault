function RegisterCtrl($scope, Data) {
    var vm = this;
    vm.model = {
        "email": "",
        "password ": "",
        "full_name": ""
    };
    vm.send = function(){
        Data.send('register', vm.model, function (result) {
            alert('registered: ', result);
        });
    };
}

app.controller('RegisterCtrl', RegisterCtrl);
