function getNameFromState(statename){
    return statename.split('.')[1];
}

function TabsDirective($location){
    function TabsCtrl($scope, $rootScope, $location, $state) {
        var vm = this;
        vm.urls = ['cards', 'home', 'user', 'market'];
        vm.stateName = getNameFromState($state.current.name);
        $rootScope.$on('$stateChangeSuccess', function(a,b){
            vm.stateName = getNameFromState($state.current.name);
        });
        
    }
    
    return {
        restrict: 'E',
        scope: true,
        controller: TabsCtrl,
        controllerAs: 'tabs',
        template: require('./tabs.component.html'),
    }
}

app.directive('headerTabs', TabsDirective);