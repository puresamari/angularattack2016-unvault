function TabsDirective($location){
    function TabsCtrl($scope, $location) {
        var vm = this;
        vm.urls = ['cards', 'home', 'user', 'market'];
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