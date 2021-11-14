import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from '../components/ContactList';
import { setContacts, removeContact  } from "../store/redux/contact/contact.action";
import db from '../db/data.json';
import { useHistory } from "react-router";

const Contact = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { contact: { data, loading } } = useSelector((state) => state);

  useEffect(() => {
    data.length === 0 && setContacts( db.contacts, dispatch );
  },[dispatch, data.length])

  return (
    <ContactList
      contactList={data} 
      loading={loading}
      onDelete={(id) => removeContact( id, dispatch )}
      onUpdate={(id) => history.push(`/contact/update/${id}`)}
    />
  )
}

export default Contact;