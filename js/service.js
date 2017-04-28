'use strict';

angular.module('service.module', [])

/* Factory */
// Fetch factory
.factory("FetchData", ['$http', function($http){
	return {
        getPokemons: function(offset){
            return $http(
                    {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    url: 'http://pokeapi.co/api/v2/pokemon/?offset='+offset
                    });
        },
        getPokemon: function(url){
            return $http(
                {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                url: url
                });
        }
	};
}])


/* Filters */
// Capitalize filter
.filter('capitalize', function() {
    return function(input, all) {
      return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
})

// Height filter (inch to cm)
.filter('height', function() {
    return function(input, all) {
      return (!!input) ? input*2.54 + ' ' + 'cm': '';
    }
});



