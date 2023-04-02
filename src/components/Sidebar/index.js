import { useState, useEffect, useRef } from 'react'
import { BsChevronLeft, BsChevronRight, BsFillPauseFill, 
    BsFillPlayFill, BsFillPlusCircleFill } from "react-icons/bs"
import { MdHdrStrong, MdOutlineLoop } from "react-icons/md"
import { AiFillLike } from "react-icons/ai"
import { FaRandom } from "react-icons/fa"

const Sidebar = ({ song, handleSlide, slide, handleIndex, index }) => {

  const [music, setMusic] = useState({
    play: false
  })

  const [pos, setPos] = useState({
    x: 0,
    y: 0
  })

  const rangeRef = useRef(),
        songRef = useRef();

    useEffect(() => {
      if(music.play){
          setInterval(()=>{
            rangeRef.current.value = songRef.current.currentTime
            if(songRef.current.currentTime === songRef.current.duration){
              setMusic({
                play: false
              })
            }
          }, 500)
          
        }
      
    }, [music.play])


  const setRange = () => {
    rangeRef.current.max = songRef.current.duration
    rangeRef.current.value = songRef.current.currentTime 
  }

  const playPause = () => {   
    if(music.play){
      songRef.current.pause()
    }else{
      songRef.current.play()
    }
    setMusic({
      play: !music.play
    })
  }

  const handleChangeRange = () => {
    if(music.play){
      songRef.current.pause()
    }
    songRef.current.currentTime = rangeRef.current.value
    setTimeout(()=>{
      songRef.current.play();
    }, 100)
    setMusic({
      play: true
    })
  }


  

  return (
    <div className={`grand-container ${slide ? 'active' : ''}`}>
      <div className="side-bar">
        <img src={song.cover} alt="" id='bg-img' />
        <div className="side-bar-container">
            <div className="container-img">
              <img src={song.cover} alt="" />
            </div>
            <div className="container-tools">
              <p className="infos-song">
                <span className="title">{song.title}</span>
                <span className="artist">{song.artist}</span>
              </p>
              <audio onLoadedMetadata={setRange} ref={songRef}>
                <source src={song.urlSong} type="audio/mpeg" />
              </audio>
              <div className="progress-bar">
                <input 
                  type="range" 
                  name="" 
                  id="bar-time" 
                  ref={rangeRef}
                  onChange={handleChangeRange}
                />
                <p className="times-numbers">
                  <span className='current-time'>00:00</span>
                  <span className="final-time">03:00</span>
                </p>
              </div>
              <div className="tools">
                <span className="random"><FaRandom /></span>
                <span className="left" onClick={() => handleIndex(index - 1)}><BsChevronLeft /></span>
                { !music.play ? 
                  (<span className="play" onClick={playPause}><BsFillPlayFill /></span>) 
                  :
                  (<span className="pause" onClick={playPause}><BsFillPauseFill /></span>)}
                <span className="right" onClick={() => handleIndex(index + 1)}><BsChevronRight /></span>
                <span className="reload"><MdOutlineLoop /></span>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-slide" onClick={handleSlide}>
              <BsChevronLeft />
        </div>
      </div>
  )
}

export default Sidebar