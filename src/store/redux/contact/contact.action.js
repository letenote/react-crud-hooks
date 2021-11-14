import * as CONTACT_ACTION_TYPE from './contact.action.type';

export const updateContact = async ( contact, dispatch ) => {
  await dispatch({
    type: CONTACT_ACTION_TYPE.UPDATE_CONTACT,
    payload: {
      data: contact
    }
  })
  return Promise.resolve()
}

export const removeContact = ( id, dispatch ) => {
  return dispatch({
    type: CONTACT_ACTION_TYPE.REMOVE_CONTACT,
    payload: { id }
  })
}

export const addContact = async ( contact, dispatch ) => {
  await dispatch({
    type: CONTACT_ACTION_TYPE.ADD_CONTACT,
    payload: {
      data: contact
    }
  })
  return Promise.resolve()
}

export const setContacts = async ( contacts, dispatch ) => {
  await dispatch({
    type: CONTACT_ACTION_TYPE.SET_CONTACTS,
    payload: {
      data: contacts
    }
  })
  return setTimeout(() => setLoading( false, dispatch ), 500)
}

const setLoading = ( value, dispatch ) => {
  return dispatch({
    type: CONTACT_ACTION_TYPE.SET_LOADING,
    payload: {
      isLoading: value
    }
  })
}