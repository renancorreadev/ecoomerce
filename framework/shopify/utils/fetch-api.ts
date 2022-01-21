type FetchParams = {
  query: string
}

const fetchApi = async ({ query }: FetchParams) => {
  const url = 'http://localhost:4000/graphql'
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  })

  const { data, errors } = await result.json()

  if (errors) {
    throw new Error(errors[0].message ?? errors.message)
    //if null or undefined message = error
  }

  return { data }
}

export default fetchApi
