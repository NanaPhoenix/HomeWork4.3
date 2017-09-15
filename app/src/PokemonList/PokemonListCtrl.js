'use strict';

pokemonApp.controller('PokemonListCtrl', function($scope, $q, PokemonsService, BerriesService) {

    $scope.pokemonListLoaded = false;
    $scope.berriesLoaded = false;
    $q.all([
        PokemonsService.getPokemons(),
        BerriesService.getBerries()
    ]).then(function(values){
      $scope.pokemons = values[0].data.results;
      $scope.berries = values[1].data.results;

      $scope.pokemonListLoaded = true;
      $scope.berriesLoaded = true;
    });

});
