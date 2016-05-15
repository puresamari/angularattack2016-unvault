function HomeCtrl($scope, Data) {
    var vm = this;
    vm.data = null;
    vm.cards = null;
    
    Data.get('home', null, function(response){
        vm.data = response.data;
    });
    
    Data.get('user-cards', null, function(response){
        vm.cards = response.data;
    });
 }

app.controller('HomeCtrl', HomeCtrl);