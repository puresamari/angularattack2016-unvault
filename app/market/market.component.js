function MarketCtrl($scope, Data) {
    var vm = this;
    vm.cards = null;
    
    vm.checkCardTags = function(tag, card) {
        var retval = false;
        if(tag == undefined) return true;
        angular.forEach(card, function(value, key) {
            if(value.id == tag.id) {
                retval = true;
            };
            console.log(value.id);
        });
        return retval;
    };
    
    Data.get('cards', null, function(response){
        vm.cards = response.data.cards;
    });
    
    Data.get('tags', null, function(response){
        vm.tags = response.data.tags;
    });
 }

app.controller('MarketCtrl', MarketCtrl);