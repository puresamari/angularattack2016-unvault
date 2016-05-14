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
        vm.topBarStyle = {};
        
        $rootScope.$on('$stateChangeSuccess', function(a,b){
            vm.stateName = getNameFromState($state.current.name);
        });
        
        vm.topBarStyle = {};
        
        angular.element($window).bind("scroll", function() {
            
            var windowtop = window.pageYOffset || document.documentElement.scrollTop;
            
            var titleElem = $element[0].querySelector('.head-title'),
                elementVal = titleElem.offsetTop + titleElem.offsetHeight;
            
            console.log(elementVal, windowtop);
            
            vm.topBarStyle = elementVal < windowtop ? {
                'position':'fixed',
                'top' : '0'
            } : {};
            
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