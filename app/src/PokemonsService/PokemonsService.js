angular
    .module('PokemonApp')
    .factory('PokemonsService', function($http) {
            $http.defaults.headers.common = {
                "application-id": "213950DC-CFE4-A30C-FF9D-259534CD0600",
                "secret-key": "DDC704DD-4EF4-6E0E-FF8E-AF0E6462C300"

            };

            $http.defaults.headers.get = {
                "application-id": "",
                "secret-key": ""
            };


            return {

                getPokemons: function() {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/?limit=10');
                },

                getPokemon: function(pokemonId) {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/' + pokemonId);
                },

                createPokemon: function(pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/v1/data/pokemon',
                        data: pokemonData
                    });
                },

                editPokemon: function(pokemonData) {
                    return $http({
                        method: 'PUT',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonData.name,
                        data: pokemonData
                    });
                },

                deletePokemon: function(pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId
                    });
                }

            }

        }

    );
