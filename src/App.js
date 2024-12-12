import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Person } from './components/Person';

function App() {
  const [people, setPeople] = useState([]);

  const getData = async () => { // {id: 1, name: 'jacob plumb', address: 'Ann Arbor, MI'}
    const {data: peopleData} = await axios.get('http://localhost:9000/people');
    const {data: addressesData} = await axios.get('http://localhost:9000/addresses');
    const combinedData = peopleData.map(person => {
      const address = addressesData.find(a => a.id == person.address);
      return {id: person.id, name: person.name, address: `${address.city}, ${address.state}`}
    })
    setPeople(combinedData);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      {people.map(person => <Person key={person.id} name={person.name} address={person.address} />)}
    </div>
  );
}

export default App;
