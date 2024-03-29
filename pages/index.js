import Head from "next/head";
import { Example } from "@components/user";
import { useGetPokemonByNameQuery } from "@lib/api/pokemon-api";
import { useState } from "react";

export default function Home() {
  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const { isLoading, data } = useGetPokemonByNameQuery(
    pokemonName.toLocaleLowerCase(),
    {
      refetchOnMountOrArgChange: true,
    }
  );

  if (isLoading) return <div>Loading... </div>;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <input
        placeholder="search pokemon"
        className="border-2 my-10 mx-20 container"
        onChange={({ target }) => target.value && setPokemonName(target.value)}
      />

      <p className="text-center text-2xl text-primary-500">{data.name}</p>
      <p className="text-center text-xl text-blue-400">abilities</p>
      {(data.abilities || []).map((ability) => (
        <p className="text-center text-base text-blue-400" key={ability.slot}>
          {" "}
          {ability.ability.name}{" "}
        </p>
      ))}

      {process.env.NEXT_PUBLIC_ENV_VARIABLE}
      <Example />
    </div>
  );
}
