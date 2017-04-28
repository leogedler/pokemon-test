
(function(){

    // Angular main module definition
    angular.module('pokemon', ['service.module', 'ui.bootstrap'])
    
    // Main Controller
	.controller('MainController', ['FetchData', function(FetchData){
        this.currentPage = 1;
        this.itemsPerPage = 20;
        this.maxSize = 5
        this.offset = 0;

        // Fetch pokemons
        this.fetchPokemons = ()=>{
            // User service to fetch pokemons
            FetchData.getPokemons(this.offset).then((response)=>{
                if(response.status === 200){
                    this.totalItems = response.data.count;
                    this.pokemons = response.data.results;
                    
                    // Retrieve pokemon details
                    this.pokemons.forEach((poke, index)=>{
                        FetchData.getPokemon(poke.url).then((response)=>{
                            if(response.status === 200) poke.info = response.data; poke.cssClass = 'poke'+ index;
                        })
                    });
                }
            })
        }

        // First call to fetch pokemons
        this.fetchPokemons()

        // On Page changed (Pagination)
        this.pageChanged = ()=>{
            // Clear list
            this.pokemons = [];
            // Set offset
            this.offset = (this.currentPage - 1)*20;
            // Call fetch method
            this.fetchPokemons();
        };

        // Click on pokemon
        this.clickOn = (pokemon)=>{
            alert('You have clicked on:'+' '+pokemon.name);
        }

    }])

})()
