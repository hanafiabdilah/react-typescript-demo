import './App.css';
import { Great } from './components/Great';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

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
      <Great name="Zahra" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={names} />
      <Status status="error" />
      <Oscar>
        <Heading>Placeholder Text</Heading>
      </Oscar>
    </div>
  );
}

export default App;
