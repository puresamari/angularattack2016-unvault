function CardDirective(){
    function CardCtrl($scope) {
        var vm = this;
        vm.data = $scope.data;
        vm.state = 0;
    }
    
    return {
        restrict: 'E',
        scope: {
            data: '=data'
        },
        controller: CardCtrl,
        controllerAs: 'card',
        template: require('./card.component.html'),
    }
}

app.directive('card', CardDirective);