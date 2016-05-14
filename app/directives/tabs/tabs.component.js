function getNameFromState(statename){
    return statename.split('.')[1];
}

function TabsDirective($location, $window){
    function TabsCtrl($scope, $element, $rootScope, $location, $state) {
        var vm = this;
        
        vm.urls = [
            {
                title: 'Home',
                url: 'home',
                icon: 'home'
            },
            {
                title: 'Cards',
                url: 'cards',
                icon: 'apps'
            },
            {
                title: 'Market',
                url: 'market',
                icon: 'shopping_basket'
            },
            {
                title: 'user',
                url: 'user',
                icon: 'account_box'
            },
        ];
        
        vm.stateName = getNameFromState($state.current.name);
        
        $rootScope.$on('$stateChangeSuccess', function(a,b){
            vm.stateName = getNameFromState($state.current.name);
        });
    }
    
    return {
        restrict: 'E',
        controller: TabsCtrl,
        controllerAs: 'tabs',
        template: require('./tabs.component.html'),
    }
}

app.directive('headerTabs', TabsDirective);