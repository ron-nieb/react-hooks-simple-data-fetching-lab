// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
  const [dogBreed, setDogBreed] = useState(null)

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogBreed(data.message)
      })
  }, [])

  if (!dogBreed) return <p>Loading...</p>
  return <img src={dogBreed} alt='A Random Dog' />
}

export default App