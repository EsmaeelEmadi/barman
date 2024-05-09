import { IUser } from "@/types/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IGetUserResponse {
  picture: { thumbnail: string };
  name: { first: string };
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/api/" }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({ // Modify the type to accept void as parameter
      query: () => "", 
      transformResponse: (response: { results: IGetUserResponse[] }) => {
        return {
          name: response.results[0].name.first,
          avatar: response.results[0].picture.thumbnail,
        };
      },
    }),
  }),
});

export const { useGetUserQuery } = userApi;
