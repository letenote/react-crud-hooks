import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from '../components/ContactList';
import { setContacts, contactToDefault } from '../store/redux/contact/contact.action';
import db from '../db/data.json';

const Contact = ( props ) => {
  const dispatch = useDispatch();
  const { contact: { data, loading } } = useSelector((state) => state);

  useEffect(() => {
    setContacts( db.contacts, dispatch )
    return () => {
      return contactToDefault( dispatch )
    }
  },[ dispatch ])

  return (
    <ContactList 
      loading={loading} 
      contactList={data}
    />
  )
}

export default Contact;