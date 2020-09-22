import React from 'react';

export default function Daters (props) {
  // const [daters, setDaters] = useState([])
  // useEffect(
  // ()=>{
  //   const callDaters = async ()=>{
  //    await getDaters();	
  //  }
  //  callDaters();
  // }, 
  // []
  // )
  // const getDaters = async () => {
  //  try{
  //  const response = await fetch('http://localhost:3000/users')
   
  //  const daters = await response.json();
  //  setDaters(daters)
  //  }catch(error){
  //    console.error(error);
  //   }
  // }
  return (
    <div>
      <div className="left">
      {props.daters.slice(0, props.daters.length /2).map( (dater, i) => {
        return (
          <div> 
            <ul key={dater.id}>
            <h3>Name: {dater.name} </h3>
            <img src={dater.img} alt={dater.name}/>
            <h4>Starsign: {dater.starsign} </h4>
            <h4>Age: {dater.age} </h4>
            {dater.ltl
              ? <h5> Loves to laugh and have a good time</h5>
              : <h5> Hates laughing, does not like having a good time</h5>
            }
           </ul>
          </div>
        )
       })}
      </div> 

{/* )} */}

          <div className="right">
           {props.daters.slice(0, props.daters.length /2).map( (dater, i) => {
        return (
           <ul key={dater.id}>
           <h3>Name: {dater.name} </h3>
            <img src={dater.img} alt={dater.name}/>
            <h4>Starsign: {dater.starsign} </h4>
            <h4>Age: {dater.age} </h4>
            {dater.ltl
              ? <h5> Loves to laugh and have a good time</h5>
              : <h5> Hates laughing, does not like having a good time</h5>
            }
           </ul>
            )
            })}
          </div>      
    </div>
  )

}


