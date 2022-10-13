import React, {useEffect,useState} from 'react';
// Import our custom hook.
import { useTheme } from '../utils/ThemeContext';
import './tran.css';
import dog from './dog.jpg';

// Make our ThemeComponent the default export from this file
export default function ThemeComponent(props) {
  // Pluck values from our ThemeContext by invoking our useTheme hook
  //onClick={toggleNorthTheme}
  const [ fade, toggleFade ] = useState(false);
  const [ northTheme, toggleNorthTheme ] = useState(false);
  const [ eastTheme, toggleEastTheme ] = useState(false);
  const [ southTheme, toggleSouthTheme ] = useState(false);
  const [ westTheme, toggleWestTheme ] = useState(false);
  const handleChange = (e)=>{
    if(!fade){
      toggleFade(true);
    } else {
      toggleFade(false);
    }
  }

  const handleNChange = (e)=>{
    if(!northTheme){
      toggleNorthTheme(true);
    } else {
      toggleNorthTheme(false);
    }
    console.log(northTheme);
  }
  const handleEChange = (e)=>{
    if(!eastTheme){
      toggleEastTheme(true);
    } else {
      toggleEastTheme(false);
    }
    console.log(eastTheme);
  }
  const handleSChange = (e)=>{
    if(!southTheme){
      toggleSouthTheme(true);
    } else {
      toggleSouthTheme(false);
    }
    console.log(southTheme, "South");
  }
  const handleWChange = (e)=>{
    if(!westTheme){
      toggleWestTheme(true);
    } else {
      toggleWestTheme(false);
    }
    console.log(westTheme);
  }

  useEffect(() => {
    console.log('fad?',fade);
  }, [fade])

  function createClassName(){
    let rtn = "dog";
    // northTheme ? "move-north dog" : "dog"
    if(northTheme){
      rtn += " move-north"
    }
    if(eastTheme){
      rtn += " move-east"
    }
    if(westTheme){
      rtn += " move-west"
    }
    if(southTheme){
      rtn += " move-south"
    }

    if(fade){
      rtn += " fade-in"
    } else {
      rtn += " fade-out"
    }
    return rtn
  }

  return (
    <>

      <button id="button" onClick={handleNChange} className="btn fade-in" type="button">
      toggleNorthTheme
      </button>
      <button id="button" onClick={handleEChange} className="btn fade-in" type="button">
      toggleEastTheme
      </button>
      <button id="button" onClick={handleWChange} className="btn fade-in" type="button">
      toggle West Theme
      </button>
      <button id="button" onClick={handleSChange} className="btn fade-in" type="button">
      toggle South Theme
      </button>

      <button id="button"  className="btn " type="button" onClick={handleChange}>
      toggleEnter
      </button>
      <br>
      </br>
      <section className="text-center">
        current : "{ createClassName() }"
      </section>    

      <img src={dog}  width="50" height="50" className ={ createClassName() } />
      
    </>
  );
}
