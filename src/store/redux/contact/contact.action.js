import * as CONTACT_ACTION_TYPE from './contact.action.type';

export const setContacts = async ( contacts, dispatch ) => {
  return storeContacts( contacts, dispatch )
    .then(() => {
      return setTimeout(() => {
        return setLoading( false, dispatch )
      }, 1000)
    });
}

const storeContacts = ( contacts, dispatch ) => {
  dispatch({
    type: CONTACT_ACTION_TYPE.SET_CONTACTS,
    payload: {
      data: contacts
    }
  })
  return Promise.resolve()
}

export const setLoading = ( value, dispatch ) => {
  return dispatch({
    type: CONTACT_ACTION_TYPE.SET_LOADING,
    payload: {
      isLoading: value
    }
  })
}

export const contactToDefault = ( dispatch ) => {
  return dispatch({
    type: CONTACT_ACTION_TYPE.SET_CONTACTS_TO_DEFAULT,
  })
}