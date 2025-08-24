import axios from "axios";
const origin = import.meta.env.VITE_BACK_END_SERVER_URL


const getAllTracks = async()=>{
    try {
        const url = `${origin}/tracks`
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
const createTrack = async (data) => {
    try {
        const url = `${origin}/tracks`
        const response = await axios.post(url, data)

        return response.data
    } catch (error) {
        console.log(error)
    }
}
const updateTrack = async (trackId, data) => {
    try {
        const url = `${origin}/tracks/${trackId}`
        const response = await axios.put(url, data)

        return response.data
    } catch (error) {
        console.log(error)
    }
}
const deleteTrack = async (id) => {
    try {
        const url = `${origin}/tracks/${id}`
        const response = await axios.delete(url)
        return response.data
    } catch (error) {
        console.log(error)
    }

}

export { createTrack , deleteTrack, getAllTracks, updateTrack }