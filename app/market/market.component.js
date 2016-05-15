function MarketCtrl($scope, Data) {
    var vm = this;
    vm.cards = null;
    
    Data.get('cards', function(response){
        vm.cards = response.data.cards;
        console.log('cards', vm.cards);
    });
 }

app.controller('MarketCtrl', MarketCtrl);