const STORAGE_KEY = 'contacts';

export function getContacts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveContacts(contacts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
}

export function getContactById(id) {
  return getContacts().find(c => c.id === id);
}

export function addContact(contact) {
  const contacts = getContacts();
  contacts.push(contact);
  saveContacts(contacts);
}

export function updateContact(updatedContact) {
  let contacts = getContacts().map(c => c.id === updatedContact.id ? updatedContact : c);
  saveContacts(contacts);
}

export function deleteContact(id) {
  let contacts = getContacts().filter(c => c.id !== id);
  saveContacts(contacts);
}
