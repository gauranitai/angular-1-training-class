angular
  .module('list', [
    'ngRoute',
    'hero'
  ])
  .config(listConfig)
  .controller('ListController', ListController);

function listConfig($routeProvider) {
  $routeProvider.when('/', { 
    templateUrl: 'src/routes/list/list.tpl.html',
    controller: ListController 
    })

}

function ListController($scope, heroService) {
  $scope.heroes = heroService.getAll()
}

