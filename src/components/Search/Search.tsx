

export const Search = ({setSearch, setPageNumber}) => {
  return (
    <form style={{display: 'flex', justifyContent: 'center',gap: '10px',  margin: '20px'}}>
      <input  onChange={e => {
                          setPageNumber(1);
                          setSearch(e.target.value)
                        }}
              placeholder='Search for Charactors' 
              type='text' 
              style={{width: '40%', padding: '10px', borderRadius: '10px', border: '2px solid #0b5ed7'}}
              />
      <button onClick={e => {e.preventDefault()}}
              style={{border: 'none', backgroundColor: '#0b5ed7', borderRadius: '10px', fontSize: '17px', color: 'white', padding: '10px'}}
              >Search</button>
    </form>
  );
};

