import './App.css';
import MyImageInsrc from "./imageInSrc.jpg";
import React from 'react';
import { Player } from 'video-react';

import './style.css'


function App() {
  return (
    <>
 <div style={{border:"solid 1px black",maxWidth:100}}>
       <h1 className="title red">Your name here</h1>
       <br/>
       <img src={MyImageInsrc }/>

      <br/>
      <img src={"/imageInPublic.jpg"}>
        
      </img>

     </div >
     
     <video width="750" height="500" controls >
     <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
     </video>
     
     
    </>
     
      
    
  );
}

export default App;