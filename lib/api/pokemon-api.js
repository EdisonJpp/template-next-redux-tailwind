import { createApi } from "@reduxjs/toolkit/query/react";
import createApiPart from "../create-api-part";

export const pokemonApi = createApi({
  ...createApiPart("pokemonApi"),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `/pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
