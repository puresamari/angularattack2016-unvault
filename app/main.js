require('../node_modules/angular/angular.min.js');
require('../node_modules/angular-ui-router/release/angular-ui-router.min.js');

window.app = angular.module('unvault', ['ui.router']);

require('app.component.js');
require('routes.js');