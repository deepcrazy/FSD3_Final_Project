import './App.css'
import React from 'react'
import FormTitle from './components/FormTitle'
import '../public/js/firebase_basic'
import writeDatabase from '../public/js/firebase_database'

const [firstNam, setFirstName] = React.useState('')
const onChangeInput = (event) => {
  setFirstName(event.target.value)
}

let userId = 1;
function onClickSaveData() {
  const data = {firstName: firstNam}
  writeDatabase("users/" + userId, data);
  userId ++;
}

export default function App() {

  return (
    <div className='App'>
      <div className='App-Content'>
        <div>
          <FormTitle>Checkout</FormTitle>

          {/* Put your solution here 👇 */}
          <form>
            <input type="text" onChange={onChangeInput} value={firstNam}>
              <span>
                First Name
              </span>
            </input>
            {/* <input type="text">
              <span>
                Last Name
              </span>
            </input> */}
            <button type="submit" onSubmit={onClickSaveData}>Save Data</button>
          </form>
        </div>
      </div>
    </div>
  )
}
