import {GET_DATA, UPDATE_DOGS, SET_ERROR} from "../actions"

const initialState = {
    dogs: [],
    isFetchingData: false,
    error: ""
}

export const dogreducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
        return {
            ...state,
            isFetchingData: true
            }
        case UPDATE_DOGS:
            return {
                ...state,
                dogs: action.payload,
                isFetchingData: false
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state
    }
}