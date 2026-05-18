import { Accordion } from "./Accordion/Accordion";

const status = ['Alive', 'Dead', 'unknown'];
const gender = ['female', 'male', 'genderless', 'unknown'];


export const Filters = ({setStatus, setGender, setPageNumber}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '20%'}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h3>Filter</h3>
      </div>
      <div>
        <Accordion title='Status' children={status} onFilters={setStatus} setPageNumber={setPageNumber}/>
        {/* <Accordion title='Species' children={undefined}/> */}
        <Accordion title='Gender' children={gender} onFilters={setGender} setPageNumber={setPageNumber}/>
      </div>
      
    </div>
  );
};

