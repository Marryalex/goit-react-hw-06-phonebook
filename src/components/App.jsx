
import ContactForm from './ContactForm/ContactForm'

import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'


export default function App() {
  
  return (
    <div className='wrapper'>
        <h1 className='title'>Phonebook</h1>
        <ContactForm />
        <h2 className='title'>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
  )
}


