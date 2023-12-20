

import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [gifts,setGifts]= useState(data);
  const removeGift = (id) => {
    let newGift = gifts.filter(gift => gift.id !== id);
    setGifts(newGift)

    console.log(newGift)

  }
return(
  <div>
<div className='container'>
<h1>List of {gifts.length} gifts</h1>
</div>

{gifts.map((element=>{

  const{id,gift,image}=element;

return(
  <div key={id}>
    <div className='container'>
      <h2>{id}-{gift}</h2>
    </div>

    <div className='container'>
 <img src={image} width="300px"/>
    </div>

<div className='container'>
<button onClick={removeGift}>Remove</button>
</div>

  </div>
)

}))}

<div className='container'>
<button onClick={()=> setGifts([])}>Delete all</button>
</div>






  </div>
)
}


  



export default App;
