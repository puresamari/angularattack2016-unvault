function AddCartCtrl($scope, Data) {
    var vm = this;
    vm.model = {
        "name": "test",
        "question": "Is testing good?",
        "answer": "TDD is the best"
    };
    
    vm.send = function(){
        Data.send('add-card', vm.model, function(response){
            console.log('sending card returned', response);
        });
    };
 }

app.controller('AddCartCtrl', AddCartCtrl);