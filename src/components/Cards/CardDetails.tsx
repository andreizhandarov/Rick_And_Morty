import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { priorityColors } from "./Cards";

export const CardDetails = () => {
  let { id } = useParams();
  const [fetchedData, updateFetchedData] = useState([]);

  let {name, image, gender, location, origin, species, status, type} = fetchedData as any;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  console.log()

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then((res)=> res.json())
      updateFetchedData(data); 
    })();
  },[api])

  return (
    <div style={{display: "flex", justifyContent: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <h1 style={{textAlign: 'center'}}>{name}</h1>
        <img src={image} alt={name} />
        <div style={{fontSize: '17px', padding: '8px', borderRadius: '5px', backgroundColor: priorityColors[status], color: 'white', textAlign: 'center'}}>{status}</div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <p>Gender: {gender}</p>
          <p>Species: {species}</p>
          <p>Location: {location?.name === "" ? "Unknow" : location?.name}</p>
          <p>Origin: {origin?.name === "" ? "Unknow" : origin?.name}</p>
          <p>Type: {type === "" ? "Unknow" : type}</p>
        </div>
      </div>
    </div>
  );
};

