import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import {
  ButtonExcluir,
  Container,
  Details,
  DivDireita,
  DivH3,
  DiviEsquerda,
  ImagePoke,
  Pokemon,
} from "./Card.styled";

import Pokebola from "../../assets/bola.png";

function Card(props) {
  const { pokemonUrl, addToPokedex, removeFromPokedex } = props;

  const location = useLocation();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});
  console.log({ pokemon });

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  const renderTypes = (types) => {
    return types.map((type) => <h3>{type.type.name}</h3>);
  };

  return (
    <Container>
      <DiviEsquerda>
        {pokemon && (
          <Details>
            <h4>#0{pokemon.id}</h4>
            <h1> {pokemon.name}</h1>
            <DivH3>{pokemon.types && renderTypes(pokemon.types)}</DivH3>
          </Details>
        )}

        <button onClick={() => goToDetailsPage(navigate)}>Detalhes</button>
      </DiviEsquerda>

      <DivDireita>
        <ImagePoke src={Pokebola} alt="" />
        <Pokemon
          src={pokemon.sprites?.other.dream_world.front_default}
          alt={pokemon.name}
        />
        {location.pathname === "/" ? (
          <button onClick={() => addToPokedex(pokemon)}>Capturar!</button>
        ) : (
          <ButtonExcluir onClick={() => removeFromPokedex(pokemon)}>
            Excluir
          </ButtonExcluir>
        )}
      </DivDireita>
    </Container>
  );
}

export default Card;
