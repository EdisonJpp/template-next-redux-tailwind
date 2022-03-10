import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export default function createApiPart(reducerPath) {
  return {
    reducerPath,
    baseQuery: fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_ENV_VARIABLE,
    }),
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      token && headers.set('authorization', `Bearer ${token}`)
      return headers
    },
  };
}
