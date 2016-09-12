angular
  .module('app', [])
  .controller('AppController', AppController);

function AppController($scope) {

  $scope.title = 'List Page';
  
  $scope.heroes = [
    {
      id: 0,
      name: 'Luke Skywalker',
      imageUrl: 'images/luke.png',
      power: 9000,
      affiliations: ['Jedi', 'Rebels'],
      light: true
    },
    {
      id: 1,
      name: 'Kartikeya',
      imageUrl: '',
      power: 9999,
      affiliations: ['Fire', 'Storm' ],
      light:true
    },
    {
      id: 1,
      name: 'Ravana',
      imageUrl: '',
      power: 8888,
      affiliations: ['Tunnel'],
      light:false
    },
  ]
}