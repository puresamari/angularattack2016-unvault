function AppCtrl($scope, $rootScope, $location, $state, Data) {
    var vm = this;
    
    var checkerTimeout;
    
    vm.user = {};
    
    vm.logout = function(){
        clearTimeout(checkerTimeout);
        Data.get('logout', null, function(response){
            vm.user = response.data.user;
        });
    };
    
    function checkUser() {
        console.log('checking user');
        Data.get('user', null, function(response){
            console.log('app user check: ', response);
//            var logout = response.data.user == null;
//            if(logout) {
//                vm.logout();
//            }
//            vm.user = response.data.user;
        });
    }
    $rootScope.$on('$stateChangeSuccess', checkUser);
    checkUser();
 }

app.controller('AppCtrl', AppCtrl);