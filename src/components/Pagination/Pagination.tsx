type Props ={
  pageNumber: number,
  setPageNumber: (pageNumber: number) => void
}

export const Pagination = ({pageNumber, setPageNumber}: Props) => {

  const prev = () =>{
    if(pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  }

  const next = () =>{
    setPageNumber(pageNumber + 1);
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', margin: '20px', gap: '20px'}}>
      <button style={{border: 'none', backgroundColor: '#0b5ed7', borderRadius: '10px', fontSize: '17px', color: 'white', padding: '10px'}} onClick={prev}>Prev</button>
      <button style={{border: 'none', backgroundColor: '#0b5ed7', borderRadius: '10px', fontSize: '17px', color: 'white', padding: '10px'}} onClick={next}>Next</button>
    </div>
  );
};

