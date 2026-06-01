import { useState } from "react";
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
  const [resetTrigger, setResetTrigger] = useState(false);

  const onReset = () => {
    setStatus(''),
    setGender(''),
    setSpecies(''),
    setPageNumber(1),
    setResetTrigger(!resetTrigger)
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '20%'}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h3>Filter</h3>
        <button 
          onClick={onReset}
          style={{width: '100px', border: 'none', backgroundColor: '#0b5ed7', borderRadius: '10px',  color: 'white', padding: '10px', marginBottom: '10px', cursor: 'pointer'}}
          >Clean Filters</button>
      </div>
      <div>
        <Accordion 
          title='Status' 
          children={status} 
          onFilters={setStatus} 
          setPageNumber={setPageNumber} 
          onOpen={true}
          reset={resetTrigger}
          />
        <Accordion 
          title='Species' 
          children={species} 
          onFilters={setSpecies} 
          setPageNumber={setPageNumber} 
          onOpen={false}
          reset={resetTrigger}
          />
        <Accordion 
          title='Gender' 
          children={gender} 
          onFilters={setGender} 
          setPageNumber={setPageNumber} 
          onOpen={false}
          reset={resetTrigger}
          />
      </div>
    </div>
  );
};

