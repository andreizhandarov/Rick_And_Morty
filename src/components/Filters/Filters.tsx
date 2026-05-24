import { Accordion } from "./Accordion/Accordion";

const status = ['Alive', 'Dead', 'unknown'];
const gender = ['female', 'male', 'genderless', 'unknown'];
const species = [
  "Human",
  "Alien",
  "Humanoid",
  "Poopybutthole",
  "Mythological",
  "Unknown",
  "Animal",
  "Disease",
  "Robot",
  "Cronenberg",
  "Planet",
];


export const Filters = ({setStatus, setGender, setSpecies, setPageNumber}) => {

  const onReset = () => {
    setStatus(''),
    setGender(''),
    setSpecies(''),
    setPageNumber(1)
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '20%'}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h3>Filter</h3>
        <button 
          onClick={onReset}
          style={{width: '80px', border: 'none', backgroundColor: '#0b5ed7', borderRadius: '10px',  color: 'white', padding: '10px', marginBottom: '10px', cursor: 'pointer'}}
          >Reset</button>
      </div>
      <div>
        <Accordion 
          title='Status' 
          children={status} 
          onFilters={setStatus} 
          setPageNumber={setPageNumber} 
          onOpen={true}
          />
        <Accordion 
          title='Species' 
          children={species} 
          onFilters={setSpecies} 
          setPageNumber={setPageNumber} 
          onOpen={false}
          />
        <Accordion 
          title='Gender' 
          children={gender} 
          onFilters={setGender} 
          setPageNumber={setPageNumber} 
          onOpen={false}
          />
      </div>
    </div>
  );
};

