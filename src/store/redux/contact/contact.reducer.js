import * as CONTACT_ACTION_TYPE from "./contact.action.type";

let initialState = {
  data: [],
  loading: true,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_ACTION_TYPE.SET_CONTACTS:
      return {
        ...state,
        data: action.payload.data,
      };
    case CONTACT_ACTION_TYPE.SET_LOADING:
      return {
        ...state,
        loading: action.payload.isLoading,
      };
    case CONTACT_ACTION_TYPE.ADD_CONTACT:
      return {
        ...state,
        // data: [ ...state.data, action.payload.data ] // remove after using json-server
      };
    case CONTACT_ACTION_TYPE.REMOVE_CONTACT:
      return {
        ...state,
        // data: state.data.filter((contact) => contact.id !== action.payload.id) // remove after using json-server
      };
    case CONTACT_ACTION_TYPE.UPDATE_CONTACT:
      // let getIndex = state.data.findIndex(contact => contact.id === action.payload.data.id) // remove after using json-server
      // state.data[getIndex]["name"] = action.payload.data["name"]; // remove after using json-server
      // state.data[getIndex]["number"] = action.payload.data["number"]; // remove after using json-server
      // state.data[getIndex]["desc"] = action.payload.data["desc"]; // remove after using json-server
      return {
        ...state,
        // data: state.data
      };
    case CONTACT_ACTION_TYPE.UNMOUNT_CONTACTS:
      return {
        data: [],
        loading: true,
      };
    default:
      return state;
  }
};

export default contactReducer;
