import React, { useState, useEffect }  from 'react';
import Daters from './components/Daters.js'
// import Daters2 from './components/Daters2.js'
import axios from 'axios'


export default function App(){
  const [daters, setDaters] = useState([])
  const [formInputs, updateFormInputs] = useState({
        name: '',
            starsign: '',
            age: '',
            ltl: '',
            img: ''
      });

  
  const getDaters = async () => {
   try{
   const response = await fetch('http://localhost:3000/users')
   const daters = await response.json();
   setDaters(daters)
   }catch(error){
     console.error(error);
    }
  };  
  useEffect(() => {
    (async function () {
        await getDaters();
    })();
}, []);

  //////////
  const handleChange = (event) => {
        const updatedFormInputs = Object.assign({}, formInputs, {       [event.target.id]: event.target.value})
        updateFormInputs(updatedFormInputs);
      }
      
    const handleSubmit = async (event) => {
        event.preventDefault();
      try{
      const response = await axios.post('http://localhost:3000/users', formInputs);
      const data = response.data;
      updateFormInputs({
            name: '',
            starsign: '',
            age: '',
            ltl: '',
            img: ''
          })
          setDaters([data, ...daters])
      } catch(error){
      console.error(error)
      }
    }

  ///////////

    return (
      <div className="App">
        <div className='header'>
          <h1>Welcome to Daters!</h1>
        </div>
        <div className='main'>
          <  Daters 
           daters = {daters}/>
          <div className='left'>
          </div>
          <div className="center">
          <h1>See how you match!</h1>
          </div>
          <div className='right'>
            {/* < Daters2 daters2 = {daters2} /> */}
          </div>
        </div>
        <div className='footer'>
        <h4>Become a Dater</h4>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={handleChange}
                  value={formInputs.name}
                  />
                <label htmlFor="starsign">Starsign</label>
                <input
                  type="text"
                  id="starsign"
                  onChange={handleChange}
                  value={formInputs.starsign}
                  />
                <label htmlFor="age">age</label>
                <input
                  type="text"
                  id="age"
                  onChange={handleChange}
                  value={formInputs.age}
                  />
                   <label htmlFor="img">Image</label>
                <input
                  type="text"
                  id="img"
                  onChange={handleChange}
                  value={formInputs.img}
                  />
                  <label htmlFor='ltl'>Love to Laugh?</label>
                  <input type="checkbox" id="ltl" onChange={handleChange} />
                <input type="submit" className="submit" />
              </form>
        </div>
      </div>
    );
  
}
