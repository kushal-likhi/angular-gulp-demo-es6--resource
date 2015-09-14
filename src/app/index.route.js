function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('todo', {
      url: '/todo',
      templateUrl: 'app/todo/todo.html',
      controller: 'TodoController',
      controllerAs: 'todo'
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
