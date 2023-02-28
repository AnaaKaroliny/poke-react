import Card from "../../components/Card/Card";
import { Container, H1 } from "./HomePage.styled";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

function HomePage(props) {
  const context = useContext(GlobalContext);

  const { pokelist, addToPokedex, pokedex } = context;

  // não mostrar pokemons que estão na pokedex
  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <>
      <Header />

      <Container>
        <H1>Todos Pokemóns</H1>
        <section>
          {filteredPokelist().map((pokemon) => (
            <Card
              key={pokemon.url}
              pokemonUrl={pokemon.url}
              addToPokedex={addToPokedex}
            />
          ))}
        </section>
      </Container>
    </>
  );
}

export default HomePage;
