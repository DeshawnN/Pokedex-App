var express = require("express");
var router = express.Router();
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();

var interval = {
	offset: 1,
	limit: 25
}

router.get("/", function(req, res) {
	if (req.query.offset) {
		interval.offset =	Number(req.query.offset);
	} else {
		interval.offset = 1;
	}
	P.getPokemonsList(interval, function(response) {
		res.render("pokemon/index", {pokemon: response.results, offset: interval.offset});
	});
});

router.post("/", function(req, res) {
	var foundPokemon = [];
	var query = req.body.pokemon.toLowerCase();

	P.getPokemonsList({}, function(response) {
		for (var i = 0, len = response.results.length; i < len; i++) {
			if (response.results[i].name.includes(query)) {
				foundPokemon.push(response.results[i]);
			}
		}
	res.render("pokemon", {pokemon: foundPokemon})
	});
});

router.get("/:pokemon", function(req, res) {
	var pokemon = req.params.pokemon;
	if (typeof pokemon === "string") {
		pokemon = pokemon.toLowerCase();
	}
	P.getPokemonByName(pokemon, function(pokemon, err) {
		if (err) {
			res.redirect("/pokemon");
		} else {
			res.render("pokemon/show", {pokemon: pokemon});
		}
	});
});

module.exports = router;