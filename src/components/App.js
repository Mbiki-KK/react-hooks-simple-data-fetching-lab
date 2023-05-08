// create your App component here
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      async function fetchDogImage() {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setImageUrl(data.message);
        setIsLoading(false);
      }
  
      fetchDogImage();
    }, []);
  
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <img src={imageUrl} alt="A Random Dog" />
        )}
      </div>
    );
  }
   
    
export default App
