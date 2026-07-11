import { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import { Filters } from "../Filters/Filters";
import { Pagination } from "../Pagination/Pagination";
import { Search } from "../Search/Search";


export const Characters = () => {

  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('')

  let {info, results} = fetchedData as any;
  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then((res)=> res.json())
      updateFetchedData(data); 
    })();
  },[api])


  return (
    <div>      
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Characters</h1>
      </div>

      <Search setSearch={setSearch} setPageNumber={setPageNumber}/>

      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Filters setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber}/>
        <Cards page='/' results={results}/>
      </div>
      {info?.pages && (
        <Pagination info={info}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}/>
      )}
    </div>
  );
};


