function CardDirective(Data){
    function CardCtrl($scope) {
        var vm = this;
        vm.state = 0;
        
        vm.data = null;
        
        Data.get('card', $scope.id, function(result){
            vm.data = result.data.card;
        }, function(result){
            console.error('Error while requesting card :', result);
            vm.data = {
                name: 'error',
                question: 'error',
                answer: 'CardDirective',
            };
        })
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