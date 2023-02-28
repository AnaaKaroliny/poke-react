import Card from "../../components/Card/Card";
import { Container, H1 } from "./PokedexPage.styled";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

function PokedexPage(props) {
  const context = useContext(GlobalContext);
  const { pokedex, removeFromPokedex } = context;

  return (
    <>
      <Header />
      <Container>
        <H1>Meus Pokemóns</H1>
        <section>
          {pokedex.map((pokemon) => (
            <Card
              key={pokemon.name}
              pokemonUrl={`${BASE_URL}/${pokemon.name}`}
              removeFromPokedex={removeFromPokedex}
            />
          ))}
        </section>
      </Container>
    </>
  );
}

export default PokedexPage;
