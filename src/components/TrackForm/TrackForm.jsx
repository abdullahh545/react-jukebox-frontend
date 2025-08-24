import { useEffect, useState } from "react"
import { createTrack, getAllTracks, updateTrack } from "../../../lib/api"


const TrackForm = ({ editTrack, setEditTrack, setFormIsShown, setTracks }) => {
  const [formData, setFormData] = useState({
    title: "",
    artist: ""
  })
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (editTrack) {
      await updateTrack(editTrack._id, formData)
      setEditTrack(null)
    }
    else {
      await createTrack(formData)
    }
    const t = await getAllTracks()
    setTracks(t)
    setFormIsShown(false)
  }
  useEffect(() => {
    if (editTrack) {
      setFormData(editTrack)
    }
  }, [])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">title: </label>
        <input type="text" name="title" id="title" onChange={handleChange} value={formData.title} />
        <label htmlFor="artist">artist: </label>
        <input type="text" name="artist" id="artist" onChange={handleChange} value={formData.artist} />

        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default TrackForm
