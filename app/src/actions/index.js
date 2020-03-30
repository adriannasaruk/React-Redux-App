import axios from "axios"
export const GET_DATA = "GET_DATA";
export const UPDATE_DOGS = "UPDATE_DOGS";
export const SET_ERROR = "SET_ERROR"


export const getData = () => dispatch=> {
    dispatch({type: GET_DATA});
    axios.get("https://api.nasa.gov/planetary/apod?api_key=TmdM8VxBEVNx4bQ0G6Y4tzxNqsF1gezMqRoHjbx7")
    .then(res => {console.log(res)
    dispatch({type: UPDATE_DOGS, payload: res.data})
})

    .catch(err => {console.log("error" ,err)
    dispatch ({ type: SET_ERROR, payload: "error fetching data"})})
}