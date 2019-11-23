import React from 'react'
import FormTitle from '../FormTitle'
import TextInput from '../TextInput'
import Dropdown from '../Dropdown'
import FormLabel from '../FormLabel'
import FormSubmit from '../FormSubmit'

export default function BasicInfo({ giveData }) {
  const [firstName, setFirstName] = React.useState(
    localStorage.getItem('firstName') || '',
  )
  const [lastName, setLastName] = React.useState(
    localStorage.getItem('lastName') || '',
  )
  const [dietaryRestriction, setDietaryRestriction] = React.useState(
    localStorage.getItem('dietaryRestriction') || 'None',
  )

  function proceed() {
    giveData({ firstName, lastName, dietaryRestriction })
  }

  return (
    <div>
      <FormTitle>Checkout</FormTitle>

      <FormLabel text='Basic Info' />
      <br />
      <br />

      <FormLabel text='First Name' />
      <TextInput
        type='text'
        setValue={setFirstName}
        value={firstName}
        placeholder='Enter your first name'
      />

      <br></br>
      <FormLabel text='Last Name' />
      <TextInput
        type='text'
        setValue={setLastName}
        value={lastName}
        placeholder='Enter your last name'
      />
      <br></br>
      <FormLabel text='Diet restriction' />
      <Dropdown
        setValue={setDietaryRestriction}
        defaultValue={dietaryRestriction}
        values={['None', 'Vegan', 'Vegetarian', 'Halal/Kosher']}
      />
      <FormSubmit
        onClick={proceed}
        isDisabled={firstName === '' || lastName === ''}
        submitText={'Continue'}
      />
    </div>
  )
}
