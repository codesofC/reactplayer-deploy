import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar"
import Container from "./components/Container"
import music from "./data/music"

function App() {

  const [slide, setSlide] = useState(false)
  const [index, setIndex] = useState(0)
  const [data, setData] = useState(music[0])

  const handleSlide = () => {
    setSlide(!slide)
  }

  const handleIndex = arg => {
    if(arg < 0){
      return setIndex(music.length - 1)
    }else if(arg > music.length - 1){
      setIndex(0)
    }else{
      setIndex(arg)
    }
  }

  useEffect(() => {
    setData(music[index])
  }, [index])

 

  return (
    <div className={`App ${slide ? 'active' : ''}`}>
      <Sidebar 
        song={data} 
        handleSlide={handleSlide} 
        slide={slide} 
        handleIndex={handleIndex}
        index={index}
      />
      <Container songs={music} />
    </div>
  );
}

export default App;
