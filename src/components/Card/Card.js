import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import { getColors } from "../../utils/ReturnCardColor";
import { Colors } from "../../utils/ReturnColors";
import {
  BG,
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

  const renderTypes = (types, getColorForType) => {
    return types.map((type) => (
      <h3 style={{ backgroundColor: getColorForType(type.type.name) }}>
        {type.type.name}
      </h3>
    ));
  };

  const renderColors = (types, colorsCard) => {
    return types.map((type) => (
      <BG style={{ backgroundColor: colorsCard(pokemon.types[0]?.type.name) }}>
        {type.types}
      </BG>
    ));
  };

  function getColorForType(type) {
    return getColors(type);
  }

  function colorsCard(type) {
    return Colors(type);
  }

  return (
    <BG types={pokemon.types}>
      {pokemon.types && renderColors(pokemon.types, colorsCard) && (
        <Container>
          <DiviEsquerda>
            {pokemon && (
              <Details>
                <h4>#0{pokemon.id}</h4>
                <h1> {pokemon.name}</h1>
                <DivH3 types={pokemon.types}>
                  {pokemon.types && renderTypes(pokemon.types, getColorForType)}
                </DivH3>
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
      )}
    </BG>
  );
}

export default Card;
