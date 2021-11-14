import React from "react";

const ContactList = (props) => {
  const { loading = true, contactList = [] } = props;

  if( loading ){
    return <div style={{ textAlign: 'center' }}>Loading..</div>
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
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        )
      });
};

export default ContactList;