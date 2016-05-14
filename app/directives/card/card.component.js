
function CardDirective(){
    function CardCtrl($scope) {
        var vm = this;
        vm.data = {
            name: 'dota 2', 
            question: 'how cool is dota 2',
            answer: 'very very cool'
        }
        vm.state = 0;
    }
    
    return {
        restrict: 'E',
        scope: true,
        controller: CardCtrl,
        controllerAs: 'card',
        template: require('./card.component.html'),
    }
}

app.directive('card', CardDirective);