// angular dependencies

require('../node_modules/angular/angular.min.js');
require('../node_modules/angular-ui-router/release/angular-ui-router.min.js');
require('../node_modules/angular-animate/angular-animate.min.js');
require('../node_modules/angular-aria/angular-aria.min.js');
require('../node_modules/angular-material/angular-material.min.js');

require('../node_modules/angular-material/angular-material.min.css');
require('../node_modules/angular-material/layouts/angular-material.layouts.min.css');

window.app = angular.module('unvault', ['ui.router', 'ngMaterial', 'ngAnimate']);

require('./main.config.js');

// controller 

require('./login/login.component.js');
require('./app/app.component.js');
require('./home/home.component.js');
require('./user/user.component.js');
require('./cards/cards.component.js');
require('./market/market.component.js');

// directives

require('./directives/tabs/tabs.component.js');
require('./directives/card/card.component.js');
require('./directives/gravatar/gravatar.component.js');

// general

require('routes.js');