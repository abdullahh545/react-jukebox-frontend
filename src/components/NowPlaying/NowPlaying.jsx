const NowPlaying = ({track}) => {
  return (
    <>
    {track ? <div className="track">
      <h2>Now Playing: </h2>
      <p>title: {track.title}</p>
      <p>artist: {track.artist}</p>
    </div> : <div className="track">playing nothing...</div>}
    </>
  )
}

export default NowPlaying
