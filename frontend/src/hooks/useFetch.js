import { useEffect, useState } from 'react'

export const useFetch = url => {
  const [response, setResponse] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  })

  const getFetch = async () => {

    // if (url.split('=').at(-1) === '') {
    //   return
    // }

    console.log(url, 'url')
    setResponse({
      ...response,
      isLoading: true,
    })
    try {
      const resp = await fetch(url)
      const data = await resp.json()

      setResponse({
        ...response,
        data,
        isLoading: false,
      })
    } catch (error) {
      console.log(error)
      setResponse({
        ...response,
        hasError: error,
        isLoading: false,
      })
    }
  }

  useEffect(() => {
    getFetch()
  }, [url])

  return { ...response }
}
