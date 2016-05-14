function GravatarDirective(){
    function GravatarCtrl($scope) {
        var vm = this;
        
        var mail = $scope.email,
            size = $scope.size || 80;
        
        vm.src = 'http://www.gravatar.com/avatar/?size=' + size;
    }
    
    return {
        restrict: 'E',
        replace: true,
        scope: {
            email: '=email',
            size: '=size',
        },
        controller: GravatarCtrl,
        controllerAs: 'gravatar',
        template: require('./gravatar.component.html'),
    }
}

app.directive('gravatar', GravatarDirective);