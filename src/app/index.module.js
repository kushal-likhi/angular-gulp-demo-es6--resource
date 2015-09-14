/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';
import routerConfig from './index.route';
import runBlock from './index.run';

import MainController from './main/main.controller';
import TodoController from './todo/todo.controller.js';

import WebDevTecService from './components/webDevTec/webDevTec.service.js';

import NavbarDirective from './components/navbar/navbar.directive.js';

angular.module('angularDemo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('TodoController', TodoController)
  .directive('acmeNavbar', () => new NavbarDirective());
