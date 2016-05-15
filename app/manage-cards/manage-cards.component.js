function ManageCardsCtrl($scope, $rootScope, Data) {
    var vm = this;
    
    vm.edit_enabled = false;
    
    vm.data = {
        'selectedCard': 0,
    }
    
    vm.updateModel = function(){
        if(vm.edit_enabled) {
            Data.get('card', vm.data.selectedCard, function(response){
                vm.data.model = response.data.card;
            });
        } else {
            vm.data.model = {
                "name": "",
                "question": "",
                "answer": ""
            };
        }
    };
    
    vm.cards = [];
    
    vm.loadCards = function(){
        Data.get('cards', null, function(response){
            vm.cards = response.data.cards;
        });
    };
    
    vm.update = function(){
        Data.put('update-card', vm.data, function(response){
            console.log('sending card returned', response);
        });
    };
    
    vm.delete = function(){
        Data.delete('card', function(response){
            console.log('sending card returned', response);
        }, vm.data);
    };
    
    vm.add = function(){
        Data.send('add-card', vm.data.model, function(response){
            console.log('sending card returned', response);
        });
    };
 }

app.controller('ManageCardsCtrl', ManageCardsCtrl);