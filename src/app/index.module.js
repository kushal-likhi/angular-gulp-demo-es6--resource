/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';
import routerConfig from './index.route';
import runBlock from './index.run';
//controllers
import MainController from './main/main.controller';
import TodoController from './todo/todo.controller.js';
//Resources
import TodoItemResource from './common/resources/TodoItemResource.js';
//Directives
import NavbarDirective from './components/navbar/navbar.directive.js';
//Filters
import HumanTimeFilter from './todo/filters/filter.humanTime.js';

angular.module('angularDemo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .filter('humanTime', () => new HumanTimeFilter().factory())
  .factory('TodoItem', TodoItemResource)
  .controller('MainController', MainController)
  .controller('TodoController', TodoController)
  .directive('acmeNavbar', () => new NavbarDirective());
