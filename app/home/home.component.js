function HomeCtrl($scope, Data) {
    var vm = this;
    vm.data = null;
    
    Data.get('home', function(response){
        console.log(response.data);
        vm.data = response.data;
    });
 }

app.controller('HomeCtrl', HomeCtrl);