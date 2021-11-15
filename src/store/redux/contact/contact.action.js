import * as CONTACT_ACTION_TYPE from "./contact.action.type";
import Service from "../../../service";
import { errorHandler } from "../../../lib";

export const updateContact = async (id, contact, dispatch) => {
  return Service.updateContact(id, contact)
    .then((res) => {
      res.status === 200 &&
        dispatch({
          type: CONTACT_ACTION_TYPE.UPDATE_CONTACT,
        });
    })
    .catch((error) => errorHandler(error))
    .finally(() => Promise.resolve());
};

export const removeContact = async (id, dispatch) => {
  return Service.removeContact(id)
    .then((res) => {
      res.status === 200 &&
        dispatch({
          type: CONTACT_ACTION_TYPE.REMOVE_CONTACT,
        });
    })
    .then(() => setLoading(true, dispatch))
    .then(() => setContacts(dispatch))
    .catch((error) => errorHandler(error));
};

export const addContact = async (contact, dispatch) => {
  return Service.addContact(contact)
    .then((res) => {
      res.status === 201 &&
        dispatch({
          type: CONTACT_ACTION_TYPE.ADD_CONTACT,
        });
    })
    .catch((error) => errorHandler(error))
    .finally(() => Promise.resolve());
};

export const setContacts = async (dispatch) => {
  return Service.getContacts()
    .then((res) => {
      dispatch({
        type: CONTACT_ACTION_TYPE.SET_CONTACTS,
        payload: {
          data: res.data,
        },
      });
    })
    .catch((error) => errorHandler(error))
    .finally(() => setTimeout(() => setLoading(false, dispatch), 300));
};

const setLoading = (value, dispatch) => {
  return dispatch({
    type: CONTACT_ACTION_TYPE.SET_LOADING,
    payload: {
      isLoading: value,
    },
  });
};

export const unmountContacts = (dispatch) => {
  return dispatch({
    type: CONTACT_ACTION_TYPE.UNMOUNT_CONTACTS,
  });
};
