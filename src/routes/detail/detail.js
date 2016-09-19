angular
  .module('detail', [
    'ngRoute',
    'hero'
  ])
  .config(detailConfig)
  .controller('DetailController', DetailController);


function detailConfig($routeProvider) {
  $routeProvider.when( '/detail/:id',
  {
    templateUrl: 'src/routes/detail/detail.tpl.html',
    controller: DetailController
  })
}

function DetailController($scope, $routeParams, heroService) {
  $scope.heroId = parseInt($routeParams.id);
  $scope.hero = heroService.get($scope.heroId);
}
