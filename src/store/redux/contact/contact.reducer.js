import * as CONTACT_ACTION_TYPE from './contact.action.type';

let initialState = {
  data: [],
  loading: true
}

const contactReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case CONTACT_ACTION_TYPE.SET_CONTACTS:
      return {
        ...state,
        data: action.payload.data
      }
    case CONTACT_ACTION_TYPE.SET_LOADING:
      return {
        ...state,
        loading: action.payload.isLoading
      }
    case CONTACT_ACTION_TYPE.ADD_CONTACT:
      return {
        ...state,
        data: [ ...state.data, action.payload.data ]
      }
    case CONTACT_ACTION_TYPE.REMOVE_CONTACT:
      return {
        ...state,
        data: state.data.filter((contact) => contact.id !== action.payload.id)
      }
    case CONTACT_ACTION_TYPE.UPDATE_CONTACT:
      let getIndex = state.data.findIndex(contact => contact.id === action.payload.data.id)
      state.data[getIndex]["name"] = action.payload.data["name"];
      state.data[getIndex]["number"] = action.payload.data["number"];
      state.data[getIndex]["desc"] = action.payload.data["desc"];
      return {
        ...state,
        data: state.data
      }
    default:
      return state
  }
}

export default contactReducer;