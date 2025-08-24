import { useEffect, useState } from "react"
import { deleteTrack, getAllTracks } from "../../../lib/api"
import "./TrackList.css"
const TrackList = ({tracks, setTracks,setEditTrack, setCurrentlyPlaying}) => {

    const getTracks = async ()=>{
        const t = await getAllTracks()
        setTracks(t)
    }
    const removeTrack = async (trackId)=>{
        await deleteTrack(trackId)
        getTracks()
    }
    const updateTrack = async (track)=>{ 
        setEditTrack(track)
    }

    useEffect(()=>{
        getTracks()
    }, [])
    return (
        <div className="trackList">
            {tracks.length ? tracks.map((track, index)=>{
                return <div key={index} className="track">
                    <p>{track.title} by {track.artist}</p>
                    <button onClick={()=>{
                        setCurrentlyPlaying(track)
                    }}>Play</button>
                    <button onClick={()=>{
                        updateTrack(track)
                    }}>Edit</button>
                    <button onClick={()=>{
                        removeTrack(track._id)
                    }}>Delete</button>
                </div>
            }) : <h1>Loading</h1> }
            {}
        </div>
    )
}

export default TrackList
