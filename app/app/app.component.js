function AppCtrl($scope, $rootScope, $location, $state, Data) {
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
        Data.get('user', function(response){
            console.log('app user check: ', response);
            var logout = response.data.user == null;
            if(logout) {
                vm.logout();
            }
            vm.user = response.data.user;
        });
    }
    $rootScope.$on('$stateChangeSuccess', checkUser);
    checkUser();
 }

app.controller('AppCtrl', AppCtrl);