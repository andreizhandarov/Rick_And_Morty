
const priorityColors: { [key: string]: string } = {
  Alive : 'green',
  Dead : 'red',
  unknown : 'grey',
}

export const Cards = ({results}) => {

  let display;

  if(results){
    display = results.map((x) => {
      return(
        <div key ={x.id} style={{maxWidth: '300px', border: '1px solid #0b5ed7', borderRadius: '20px', overflow: 'hidden', position: 'relative'}}>
          <img src={x.image} style={{width: '100%', objectFit: 'contain'}} alt={x.name}/>
            <h3>{x.name}</h3>
            <div>
              <p>Last location</p>
              <h4>{x.location.name}</h4>
            </div>
            <div style={{position: 'absolute', top: '10px', right: '10px', fontSize: '17px', padding: '8px', borderRadius: '5px', backgroundColor: priorityColors[x.status], color: 'white'}}>{x.status}</div>
        </div>
      )
    })
  }else{
    display = 'No Characters Found :('
  }

  return (
    <div style={{width: '78%', display: 'flex', justifyContent: 'center'}}>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', maxWidth: '980px'}}>
        {display}
      </div>
    </div>
  );
};

