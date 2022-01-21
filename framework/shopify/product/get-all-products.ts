const fetchApi = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const result = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await result.json()
  return { data }
}

const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchApi()
  return products.data
}

export default getAllProducts
