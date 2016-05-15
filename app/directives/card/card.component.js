function CardDirective(Data, Error){
    function CardCtrl($scope) {
        var vm = this;
        vm.state = 0;
        
        vm.data = null;
        
        vm.loading = true;
        
        vm.userAddCard = function() {
            Data.send('user-add-card', {
                'user-id': parseInt(localStorage.id),
                'card-id': vm.data.id,
            }, function(result) {
                console.log(result);
                Error.info('Card', 'Card ')
            }, function(result) {
                console.error('userAddCard error ', result);   
            });
        };
        
        Data.get('card', $scope.id, function(result){
            vm.data = result.data.card;
            vm.loading = false;
        }, function(result){
            console.error('Error while requesting card ', result);
            vm.loading = false;
            vm.data = {
                name: 'error',
                question: 'error',
                answer: 'CardDirective',
            };
        });
    }
    
    return {
        restrict: 'E',
        scope: {
            id: '=id'
        },
        replace: true,
        controller: CardCtrl,
        controllerAs: 'card',
        template: require('./card.component.html'),
    }
}

app.directive('card', CardDirective);