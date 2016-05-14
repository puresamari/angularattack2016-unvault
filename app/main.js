// angular dependencies

require('../node_modules/angular/angular.min.js');
require('../node_modules/angular-ui-router/release/angular-ui-router.min.js');
require('../node_modules/angular-animate/angular-animate.min.js');
require('../node_modules/angular-aria/angular-aria.min.js');
require('../node_modules/angular-material/angular-material.min.js');

require('../node_modules/angular-material/angular-material.min.css');
require('../node_modules/angular-material/layouts/angular-material.layouts.min.css');

window.app = angular.module('unvault', ['ui.router', 'ngMaterial', 'ngAnimate']);

require('app.component.js');
require('routes.js');