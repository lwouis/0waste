import React, {FormEventHandler, useState} from 'react';
import './App.css';

interface Item {
  name: string
  expirationDate: Date
}

function App() {
  const now = new Date()
  const [currentItemName, setCurrentItemName] = useState('')
  const [currentItemExpirationDate, setCurrentItemExpirationDate] = useState(now.toString())
  const [items, setItems] = useState<Item[]>([
    {name: 'apple', expirationDate: new Date('2021-05-19')},
    {name: 'potato', expirationDate: new Date('2021-05-19')},
    {name: 'bananas', expirationDate: new Date('2021-05-19')},
  ])

  function daysRemaining(expirationDate: Date): string {
    const oneDay = 24 * 60 * 60 * 1000
    const days = Math.round(Math.abs((+expirationDate - +now) / oneDay))
    return `${days} days`
  }

  const addItem: FormEventHandler = (event) => {
    event.preventDefault()
    setItems([...items, {name: currentItemName, expirationDate: new Date(currentItemExpirationDate)}])
  }

  return (
    <div className="App">
      <form onSubmit={addItem}>
        <input type={'text'} value={currentItemName} onChange={(event) => setCurrentItemName(event.currentTarget.value)}/>
        <input type={'date'} value={currentItemExpirationDate} onChange={(event) => setCurrentItemExpirationDate(event.currentTarget.value)}/>
        <input type={'submit'} value={'Add'}/>
      </form>
      <table className={'pure-table pure-table-horizontal'}>
        <thead>
        <tr>
          <th>Item</th>
          <th>Expires in</th>
          <th>Expiration date</th>
        </tr>
        </thead>
        <tbody>
        {items.map(item =>
          <tr>
            <td>{item.name}</td>
            <td>{daysRemaining(item.expirationDate)}</td>
            <td>{item.expirationDate.toLocaleDateString()}</td>
          </tr>,
        )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
