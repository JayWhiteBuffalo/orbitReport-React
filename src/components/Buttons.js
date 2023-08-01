import satData from "./satData";
import './styling.css';


const Buttons = (props) => {
return(
    <div>
  {props.displaySats.map((sat, id) => {
  return (
      <button onClick={() => props.filterByType(sat)} key={id} >
         {sat} Orbit
      </button>
  );
  })}
      <button className="flex-container" onClick={() => props.setSat(satData)}>All Orbits</button>
    </div>
)
};


export default Buttons;