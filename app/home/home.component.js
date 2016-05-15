function HomeCtrl($scope, Data) {
    var vm = this;
    vm.data = null;
    
    Data.get('home', null, function(response){
        vm.data = response.data;
    });
 }

app.controller('HomeCtrl', HomeCtrl);