import './App.css';
import { Great } from './components/Great';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Hanafi',
    last: 'Abdilah',
  };

  const names = [
    {
      first: 'Hanafi',
      last: 'Abdilah',
    },
    {
      first: 'Rahma',
      last: 'Zahra',
    },
    {
      first: 'Muhammad',
      last: 'Kholilurrahman',
    }
  ]

  return (
    <div className="App">
      <Great name="Hanafi" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={names} />
    </div>
  );
}

export default App;
