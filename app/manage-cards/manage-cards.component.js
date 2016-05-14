function ManageCardsCtrl($scope, Data) {
    var vm = this;
    
    vm.edit_enabled = true;
    
    vm.data = {
        'selectedCard': 0,
        'model': {
            "name": "test",
            "question": "Is testing good?",
            "answer": "TDD is the best"
        },
    }
    
    vm.cards = [
        {
            "id": 0,
            "name": "test",
        },
        {
            "id": 2,
            "name": "test2",
        },
    ];
    
    vm.loadCards = function(){
        Data.get('cards', function(response){
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