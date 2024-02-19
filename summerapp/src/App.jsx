import { useEffect, useState } from 'react';
import './App.css'
import SingleCard from './assets/Components/SingleCard';
const url = 'https://react--course-api.herokuapp.com/api/v1/data/vacanze';


function App() {

  const [data, setData] = useState([]);
  const [locationIndex,setLocationIndex] = useState(0);

  
  

  useEffect(() => {
    const getFetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Errore durante la richiesta dei dati');
        }
        const { data } = await response.json();
        setData(data);

        console.log(data)
      } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
      }
    };

    getFetchData();
  }, []);

  const handleNextLocation = () =>{
    setLocationIndex((prevIndex) =>(prevIndex +1 ) % data.length);
  };

  const handlePrevLocation = () => {
    setLocationIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <h1>Le nostre vacanze</h1>
     {data.map((el) => (
      <SingleCard 
      key={el.id} 
      id={data[locationIndex].id}
      titolo={data[locationIndex].titolo}
      img={data[locationIndex].img}
      descrizione={data[locationIndex].descrizione}
       prezzo={data[locationIndex].prezzo}
       durata={data[locationIndex].durata}
       handlePrevLocation={handlePrevLocation}
       handleNextLocation={handleNextLocation}
       />
     ))}
    </>
  );
}

export default App

