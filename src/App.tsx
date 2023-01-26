import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Great } from './components/Great';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { LoggedIn } from './components/state/LoggedIn';
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
      <LoggedIn />
    </div>
  );
}

export default App;
