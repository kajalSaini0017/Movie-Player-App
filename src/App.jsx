import { useState } from 'react'
import AppLayout from './Components/AppLayout'
import { useEffect } from 'react';

function App() {
  const [appLoad, setAppload] = useState(false);
  useEffect(() => {
     const timer=setTimeout(()=>{
      setAppload(true);
     },2100)
  },[])
  if (!appLoad) {
    return <div className='Movie-player'><h1 className='reveal-text' >Movie Player</h1></div> 
  }
  else {
    return (
      <AppLayout />

    )
  }


}

export default App
