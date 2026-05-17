import { Accordion } from "./Accordion/Accordion";


export const Filters = ({setStatus}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '20%'}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h3>Filter</h3>
      </div>
      <div>
        <Accordion title='Status' children={<div><button onClick={()=>setStatus('Alive')}>Alive</button><button onClick={()=>setStatus('Dead')}>Dead</button><button onClick={()=>setStatus('')}>Reset</button></div>}/>
        <Accordion title='Species' children={undefined}/>
        <Accordion title='Gender' children={undefined}/>
      </div>
      
    </div>
  );
};

