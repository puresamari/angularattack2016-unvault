function AppCtrl($scope, Data) {
    var vm = this;
    vm.user = {};
    vm.logout = function(){
        Data.get('logout', function(result){
            console.log(result);
            vm.user = result.data.user;
        });
    };
    
    function checkUser() {
        Data.get('general', function(result){
            console.log(result);
            vm.user = result.data.user;
        });
        setTimeout(checkUser, 10000);
    }
    checkUser();
 }

app.controller('AppCtrl', AppCtrl);