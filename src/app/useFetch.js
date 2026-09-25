import { useState, useEffect } from "react";  

export default function useFetch() {
  const URLAPI = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
  const [carga, setCarga] = useState(true);
  const [data, setData] = useState(null); 
 // carga indica que los datos se estan cargando,
 // data es el objeto que contiene la informacion de la API
  useEffect(() => {
    fetch(URLAPI)
      .then((res) => res.json()) 
      .then((res) => setData(res)) 
      .catch((error) => console.log("Error en fetch:", error)) 
      .finally(() => setCarga(false)); 
  }, []);

  return {
    data,
    carga: carga,
  };
}