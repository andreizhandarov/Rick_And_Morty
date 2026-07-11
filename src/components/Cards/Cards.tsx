
import { Link } from "react-router-dom";

export const priorityColors: { [key: string]: string } = {
  Alive : 'green',
  Dead : 'red',
  unknown : 'grey',
}

export const Cards = ({results, page}) => {

  let display;

  if(results){
    display = results.map((x) => {
      return(
        <Link to = {`${page}${x.id}`} 
          key ={x.id} style={{width: '300px', border: '1px solid #0b5ed7', borderRadius: '20px', overflow: 'hidden', position: 'relative', textDecoration: 'none', color: 'black'}}>
          <img src={x.image} style={{width: '100%', objectFit: 'contain'}} alt={x.name}/>
            <div style={{margin: '10px 0px 10px 30px' }}>
              <h3>{x.name}</h3>
              <div style={{display: 'flex', flexDirection: 'column', marginTop: '10px', gap: '5px' }}>
                <p>Last location:</p>
                <h4>{x.location.name}</h4>
              </div>
            </div>
            <div style={{position: 'absolute', top: '10px', right: '10px', fontSize: '17px', padding: '8px', borderRadius: '5px', backgroundColor: priorityColors[x.status], color: 'white'}}>{x.status}</div>
        </Link>
      )
    })
  }else{
    display = 'No Characters Found :('
  }

  return (
    // <div style={{width: '78%', display: 'flex', justifyContent: 'center', border: '1px solid red'}}>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', width: '980px'}}>
        {display}
      </div>
    // </div>
  );
};

