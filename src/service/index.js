import API from './config';

class Service {
  static getContacts(){
    return API.get('/contacts')
  }
  static removeContact(id){
    return API.delete(`/contacts/${id}`)
  }
  static addContact(contact){
    return API.post('/contacts', contact)
  }
  static getContact(id){
    return API.get(`/contacts/${id}`)
  }
  static updateContact(id, contact){
    return API.put(`/contacts/${id}`, contact)
  }
}

export default Service;