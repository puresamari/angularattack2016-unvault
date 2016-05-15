function getNameFromState(statename){
    return statename.split('.')[1];
}

function TabsDirective($location, $window){
    function TabsCtrl($scope, $element, $rootScope, $location, $state) {
        var vm = this;
        
        vm.urls = [
            {
                title: 'Home',
                state: 'home',
                icon: 'home'
            },
            {
                title: 'Cards',
                state: 'cards',
                icon: 'apps'
            },
            {
                title: 'Market',
                state: 'market',
                icon: 'shopping_basket'
            },
            {
                title: 'user',
                state: 'user',
                icon: 'account_box'
            },
        ];
        
        vm.tools = [
            {
                title: 'Edit Cards',
                state: 'manage-cards',
                icon: 'edit'
            },
        ];
        
        vm.stateName = getNameFromState($state.current.name);
        
        $rootScope.$on('$stateChangeSuccess', function(a,b){
            vm.stateName = getNameFromState($state.current.name);
        });
    }
    
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        controller: TabsCtrl,
        controllerAs: 'tabs',
        template: require('./tabs.component.html'),
    }
}

app.directive('headerTabs', TabsDirective);