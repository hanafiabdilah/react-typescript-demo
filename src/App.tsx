import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Great } from './components/Great';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
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
      <Counter />
      <User />
      <LoggedIn />
      <Container styles={{ padding: '1rem', border: '1px solid red' }} />
      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id)
      }} />
      <Input value="" handleChange={event => console.log(event)} />
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
