import './App.css'
import React from 'react'
import FormTitle from './components/FormTitle'
import TextInput from './components/TextInput'
import Dropdown from './components/Dropdown'
import addData from './utils/FirebaseInterface'
// import '../public/js/firebase_basic'
// import writeDatabase from '../public/js/firebase_database'

export default function App() {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [dietaryRestriction, setDietaryRestriction] = React.useState('None')

  function onClickSaveData() {
    const data = {
      firstName: firstName,
      lasName: lastName,
      dietaryRestriction: dietaryRestriction,
    }

    console.log(data)
  }

  return (
    <div className='App'>
      <div className='App-Content'>
        <div>
          <FormTitle>Checkout</FormTitle>

          {/* Put your solution here 👇 */}
          <label>
            Please enter your first name
            <TextInput type='text' setValue={setFirstName} value={firstName} />
          </label>

          <label>
            Please enter your last name
            <TextInput type='text' setValue={setLastName} value={lastName} />
          </label>

          <label>
            Please select your dietary restrictions{' '}
            <Dropdown
              setValue={setDietaryRestriction}
              values={['None', 'Vegan', 'Vegetarian', 'Halal/Kosher']}
            />
          </label>

          <button type='submit' onClick={onClickSaveData}>
            Save Data
          </button>
        </div>
      </div>
    </div>
  )
}
