import {  BsFillPlusCircleFill, BsFillPlayFill } from "react-icons/bs"
import playlist from "../../data/playlist"
import recomended from "../../data/recomended"
import { v4 as uuid } from "uuid"
import bg from '../../assets/images/bg1.jpg'

const Container = ({ songs }) => {
  return (
    <div className="container-section">
        <div className="search-bar">
          <div className="logo">
            <span>ANIM</span>
            Player
          </div>
          <div className="contain">
              <input type="text" name="" id="" placeholder='Rechercher' />
              <div className="user-section">
                <img src="https://th.bing.com/th/id/R.45cecbc8dd706a21d7f6f79fe939f7d5?rik=sJRgOw3GhQrtbA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-vRbJGCcvu8M%2fTVzDOMWrfRI%2fAAAAAAAAB4k%2fJeqhnJ6FhII%2fs1600%2fItachi.png&ehk=CaYdg534bZn%2fDA%2bKFWZJHhflQaCHn%2f0a%2fEKGhcNXig0%3d&risl=&pid=ImgRaw&r=0" alt="" />
              </div>
          </div>
        </div>
        <div className="section-content">
          <div className="bg-playlist">
            <img src={bg} alt="" className="bg" />
            <div className="section-playlist">
              <div className="banner">

              </div>
              <div className="playlists">
                <h2>Playlists</h2>
                <div className="content-playlists">
                    {
                      playlist.map(item => (
                        <div key={uuid()} className="infos-playlist">
                          <div className="infos">
                            <p className="title">{ item.title}</p>
                            <p className="songs"> { item.songName } </p>
                          </div>
                          <div className="playlist-images">
                            <img src={item.images[1]} alt="img" id="list" />
                          </div>
                        </div>
                      ))
                    }
                  </div>
              </div>
              <div className="section-playlists-suggered">
                  <h2>Recomandés</h2>
                  <div className="recomanded">
                  {
                    recomended.map(item => (
                      <div key={uuid()} className="playslist-suggered">
                        <p className="title">{item.name}</p>
                        <div className="artists">
                          <img src={item.image} alt="img" />
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          

          <div className="section-songs">
            <div className="current-songs">
              <ul>
                <li className='active'>Musique</li>
                <li>Recommandées</li>
                <li>Artistes Populaires</li>
              </ul>
              <div className="songs">
                {
                  songs.map(item => (
                      <div key={uuid()} className="song">
                        <div className="contain">
                          <img src={item.cover} alt="" />
                          <div className="infos">
                            <span className="title">{item.title}</span>
                            <span className="artist">{item.artist}</span>
                          </div>
                        </div>
                        <span className="play-icon"> <BsFillPlayFill /> </span>
                      </div>
                  ))
                }
              </div>
              
            </div>
            <div className="recomanded-songs">
              <div className="new">
                <span><BsFillPlusCircleFill /></span>
                <p>Nouvelle playlist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Container