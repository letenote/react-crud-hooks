import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../components/ContactList";
import {
  setContacts,
  removeContact,
  unmountContacts,
} from "../store/redux/contact/contact.action";
import { useHistory } from "react-router";

const Contact = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {contact: { data, loading }} = useSelector((state) => state);

  useEffect(() => {
    setContacts(dispatch);
    return () => unmountContacts(dispatch);
  }, [dispatch]);

  return (
    <ContactList
      contactList={data}
      loading={loading}
      onDelete={(id) => removeContact(id, dispatch)}
      onUpdate={(id) => history.push(`/contact/update/${id}`)}
    />
  );
};

export default Contact;
