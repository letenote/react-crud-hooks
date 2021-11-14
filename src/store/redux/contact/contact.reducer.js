import * as CONTACT_ACTION_TYPE from './contact.action.type';

const initialState = {
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
    case CONTACT_ACTION_TYPE.SET_CONTACTS_TO_DEFAULT:
      return {
        data: [],
        loading: true
      }
    default:
      return state;
  }
}

export default contactReducer;