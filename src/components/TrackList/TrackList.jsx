import { useEffect } from "react";
import { deleteTrack, getAllTracks } from "../../../lib/api";
import "./TrackList.css";

const TrackList = ({
  tracks,
  setTracks,
  setEditTrack,
  setCurrentlyPlaying,
}) => {
  const getTracks = async () => {
    const all = await getAllTracks();
    setTracks(Array.isArray(all) ? all : []);
  };

  const removeTrack = async (trackId) => {
    await deleteTrack(trackId);
    getTracks();
  };

  const updateTrack = (track) => {
    setEditTrack(track);
  };

  useEffect(() => {
    getTracks();
  }, []);

  if (!Array.isArray(tracks)) return <h1>Loading...</h1>;

  return (
    <div className="trackList">
      {tracks.length > 0 ? (
        tracks.map((track, index) => (
          <div key={index} className="track">
            <p>
              {track.title} by {track.artist}
            </p>
            <button onClick={() => setCurrentlyPlaying(track)}>Play</button>
            <button onClick={() => updateTrack(track)}>Edit</button>
            <button onClick={() => removeTrack(track._id)}>Delete</button>
          </div>
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default TrackList;
