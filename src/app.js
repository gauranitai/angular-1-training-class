angular
  .module('app', ['hero'])
  .controller('AppController', AppController); 

function AppController ($scope, heroService) {
    //This could have been anony call to AppController function which would be implmented as AppController($scope, heroService)
    //Jeremy says better to avoid anonymous here because you could add more nested calls like .filter on the controller. 
    $scope.heroes = heroService.getAll();
    $scope.title = "Micron Heroes";
  }