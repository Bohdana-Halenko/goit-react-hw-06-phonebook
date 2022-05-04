import ContactItem from './ContactItem';
import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import s from './App.module.css';


const App = () => {
  return (
    <div className={s.container}>
      <ContactList>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter/>
        <ContactItem />
      </ContactList>
    </div>  
  );
};

export default App;
