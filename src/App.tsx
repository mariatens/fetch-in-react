import { useState } from "react";

interface Dog {
  message: string;
  status: string;
}

function App() {
  const [dog, setDog] = useState<Dog>();
  const [storedDogs, setStoredDogs] = useState<string[]>([]);
  // const handleGetDog = async () => {
  //   const response = await fetch(
  //     "https://dog.ceo/api/breeds/image/random"
  //   )
  //   const jsonBody: Dog = await response.json();
  //   setDog(jsonBody[0]);
  //   console.log(jsonBody[0])
  // };

  const handleGetDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((fetchedDog: Dog) => {
        setDog(fetchedDog); 
        setStoredDogs([...storedDogs, fetchedDog.message])
      });
  };

  if (dog) {
    return (
      <div>
        <h1>Dog app</h1>
        <p>
          <img src = {dog.message} alt = ''/>
        </p>
        <button onClick={handleGetDog}>Get another dog</button>
        <p>
      {storedDogs.map((eachImg) => <img key = {eachImg} src = {eachImg} alt  = ''/>)}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          dog from an API!
        </p>
        <button onClick={handleGetDog}>Get dog</button>
      </div>
    );
  }
}

export default App;
