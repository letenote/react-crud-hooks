import React from "react";

const ContactList = (props) => {
  const { loading, contactList = [], onDelete, onUpdate } = props;
  if( loading ){
    return <div style={{ textAlign: 'center' }}>Loading ..</div>
  }
  return contactList.length === 0
    ? <div style={{ textAlign: 'center' }}>No Contact List</div>
    : contactList.map(( contact, contactIndex ) => {
        return (
          <div className="contact" key={`${contactIndex}`}>
            <div className="contact-info">
              <p className="contact-info-name">{contact.name}</p>
              <p className="contact-info-number">{contact.number}</p>
            </div>
            <div className="contact-actions">
              <button className="btn btn-primary" onClick={() => onUpdate && onUpdate(contact.id)}>Edit</button>
              <button className="btn btn-danger" onClick={() => onDelete && onDelete(contact.id)}>Delete</button>
            </div>
          </div>
        )
      });
};

export default ContactList;