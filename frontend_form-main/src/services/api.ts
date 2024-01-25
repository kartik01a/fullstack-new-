import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getToDoById: builder.query<Todo, number>({
      query: (id) => `todos/${id}`,
    }),
      createTodo: builder.mutation<void, Omit<Todo, 'id'>>({
        query: (data) => ({
            url: '/register',
            method: 'POST',
            body: data,
          }),
      }),
  }),
})


export const { useGetToDoByIdQuery, useLazyGetToDoByIdQuery, useCreateTodoMutation } = api