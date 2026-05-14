import { useEffect, useState } from 'react'
import './App.css'
import { Cards } from './components/Cards/Cards'
import { Filters } from './components/Filters/Filters'
import { Pagination } from './components/Pagination/Pagination';
import { Search } from './components/Search/Search';


function App() {

  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState('');

  let {info, results} = fetchedData as any;
  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then((res)=> res.json())
      updateFetchedData(data);
    })();
  },[api])
      

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Rick & Morty <span style={{color: 'blue'}}>WIKI</span></h1>
      </div>

      <Search setSearch={setSearch} setPageNumber={setPageNumber}/>

      <div style={{display: 'flex', gap: '100px'}}>
        <Filters />
        <Cards results={results}/>
      </div>
      {info?.pages && (
        <Pagination info={info}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}/>
      )}
    </div>
  )
}

export default App
