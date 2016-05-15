function ManageCardsCtrl($scope, $rootScope, Data, Error) {
    var vm = this;
    
    vm.edit_enabled = false;
    
    vm.data = {
        'selectedCard': 0,
    }
    
    vm.updateModel = function(){
        if(vm.edit_enabled && vm.data.selectedCard != 0) {
            Data.get('card', vm.data.selectedCard, function(response){
                vm.data.model = response.data.card;
                vm.selectedTags = response.data.card.tags;
            });
        } else {
            vm.data.model = {
                "name": "",
                "question": "",
                "answer": ""
            };
                vm.selectedTags = [];
        }
    };
    vm.availTags = [];
    Data.get('tags', null, function(response){
        vm.availTags = response.data.tags;
        console.log(response);
    });
    
    vm.cards = [];
    
    vm.loadCards = function(){
        Data.get('cards', null, function(response){
            vm.cards = response.data.cards;
        });
    };
    
    vm.update = function(){
        var sendData = vm.data;
        vm.data.model.tags = [];
        angular.forEach(vm.selectedTags, function(value, key) {
            vm.data.model.tags.push({
                'tag_id' : value.id,
                'card_id' : vm.data.selectedCard,
            });
        });
        Data.put('update-card', sendData, function(response){
            Error.info('Added', 'Card "' + response.data.card.name + '" has been updated');
        }, function(result) {
            console.error('update error ', result);   
        });
    };
    
    vm.delete = function(){
        Data.delete('card', function(response){
            Error.info('Deleted', 'Card has been deleted');
        }, vm.data, function(result) {
            Error.alert('Error', 'Card ' + response.data.name + ' has been added');
            console.error('delete error ', result);   
        });
    };
    
    vm.add = function(){
        var sendData = vm.data;
        vm.data.model.tags = [];
        angular.forEach(card, function(value, key) {
            vm.data.model.tags.push({
                'tag_id' : value.id
            });
        });
        Data.send('add-card', sendData, function(response){
            Error.info('Added', 'Card "' + response.data.name + '" has been added');
        }, function(result) {
            Error.alert('Error', 'An error has accured while deleting a Card');
            console.error('add error ', result);
        });
    };
 }

app.controller('ManageCardsCtrl', ManageCardsCtrl);