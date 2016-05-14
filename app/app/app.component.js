function AppCtrl($scope, Data) {
    var vm = this;
    
    var checkerTimeout;
    
    vm.user = {};
    
    vm.logout = function(){
        clearTimeout(checkerTimeout);
        Data.get('logout', function(response){
            vm.user = response.data.user;
        });
    };
    
    function checkUser() {
        Data.get('general', function(response){
            console.log('checker got ', response);
            if(false) {
                vm.logout();
            }
            vm.user = response.data.user;
        });
        checkerTimeout = setTimeout(checkUser, 10000);
    }
    checkUser();
 }

app.controller('AppCtrl', AppCtrl);