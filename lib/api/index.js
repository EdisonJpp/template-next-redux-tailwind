import { pokemonApi } from "./pokemon-api";

const initialProcessedAPIs = {
  reducer: {},
  middleware: [],
};

const arrRawApi = [pokemonApi];

const buildProcessedAPIs = () =>
  arrRawApi.reduce((accApi, currApi) => {
    return {
      reducer: { ...accApi.reducer, [currApi.reducerPath]: currApi.reducer },
      middleware: [...accApi.middleware, currApi.middleware],
    };
  }, initialProcessedAPIs);

export default buildProcessedAPIs;
