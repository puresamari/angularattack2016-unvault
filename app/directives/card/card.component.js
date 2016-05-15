function CardDirective(Data){
    function CardCtrl($scope) {
        var vm = this;
        vm.state = 0;
        
        vm.data = null;
        
        Data.get('card', function(result){
            vm.data = result.data.card;
        }, $scope.id)
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