// src/App.jsx
import { useEffect, useState } from "react";
import TrackForm from "./components/TrackForm/TrackForm";
import TrackList from "./components/TrackList/TrackList";
import NowPlaying from "./components/NowPlaying/NowPlaying";
import "./App.css"
const App = () => {
  const [tracks, setTracks] = useState([])
  const [editTrack, setEditTrack] = useState(null)
  const [formIsShown, setFormIsShown] = useState(false)
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)
  const handleShowForm = ()=>{
    setFormIsShown(true)
    console.log(tracks)
  }
  const setEditTrackHandler= (track)=>{
    setEditTrack(track)
    setFormIsShown(true)
  }

  return (<>
    <button onClick={handleShowForm} >Add A New Track</button>
    {formIsShown ? <TrackForm editTrack={editTrack} setEditTrack={setEditTrack} setFormIsShown={setFormIsShown} setTracks={setTracks}/>  : null}
    <TrackList tracks={tracks} setTracks={setTracks} setEditTrack={setEditTrackHandler} setCurrentlyPlaying={setCurrentlyPlaying}/>
    <NowPlaying track={currentlyPlaying}/>
    
  </>);
};

export default App;