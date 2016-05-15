function CardsCtrl($scope, Data) {
    var vm = this;
    
    vm.cards = {};
    
    Data.get('user-cards', null, function(response){
        vm.cards = response.data;
    });
 }

app.controller('CardsCtrl', CardsCtrl);