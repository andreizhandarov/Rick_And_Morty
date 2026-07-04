import { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";


export const Episode = () => {

  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);

  console.log(info);
  
  let { air_date, name } = info as any;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then((res)=> res.json());
      setInfo(data);
      
      let cards = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(cards);
    })();
  },[api])

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
        <h1>Episode : <span style={{color: '#0b5ed7'}}>{name === "" ? "Unknow" : name}</span></h1>
        <h4>Air date: {air_date === "" ? "Unknow" : air_date}</h4>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div>
          <h3>Pick Episodes</h3>
          <div>input group</div>
        </div>
        <Cards results={results}/>
      </div>
    </div>
  );
};

