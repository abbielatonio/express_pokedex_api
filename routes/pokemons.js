import express, { request } from "express";
import fs from "fs";

const router = express.Router();

fs.readFileSync("./pokemon.json", { encoding: "utf8" });

const jsonString = fs.readFileSync("./pokemon.json");
const pokemons = JSON.parse(jsonString);
//.....................................................................................................get all
// router.get("/", (request, response) => {
//   console.log(pokemons);
//   return response.send(pokemons);

// });

//.....................................................................................................w/ offset

router.get("/", (request, response) => {
  var offset = parseInt(request.query.offset);
  var limit = parseInt(request.query.limit);
  return response.send(pokemons.slice(offset + limit));
});

//.....................................................................................................search
router.get("/search", (request, response) => {
  const search = request.query.type.toString().toLowerCase();
  const matched = pokemons.filter((pokemon) => pokemon.type.toString().toLowerCase().includes(search));
  return response.send(matched);
});

//.....................................................................................................get name
router.get("/:name", (request, response) => {
  const name = request.params.name.toLowerCase();
  const foundPokemon = pokemons.find(
    (pokemon) => pokemon.name.toLowerCase() === name
  );

  return response.send(foundPokemon);
});

export default router;
