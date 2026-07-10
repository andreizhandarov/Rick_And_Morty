import { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import { InputGroup } from "../Filters/InputGoup/InputGroup";


export const Location = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState({});
  const [results, setResults] = useState([]);
  const [count, setCount] = useState(0);
  
  let { name, dimension, type } = info as any;

  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let episodeList = await fetch(`https://rickandmortyapi.com/api/location`).then((res) => res.json());
      setCount(episodeList.info.count); 
    })();
  }, []);

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then((res)=> res.json());
      setInfo(data);
      
      let promise = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(promise);
    })();
  },[api])

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
        <h1>Episode : <span style={{color: '#0b5ed7'}}>{name === "" ? "Unknow" : name}</span></h1>
        <h4>Dimension: {dimension === "" ? "Unknow" : dimension}</h4>
        <h5>Type: {type === "" ? "Unknow" : type}</h5>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '50px'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h3>Pick Location</h3>
          <InputGroup total={count} name='Location' setId={setId}/>
        </div>
        <Cards results={results}/>
      </div>
    </div>
  );
};

