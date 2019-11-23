import React from 'react'
import FormTitle from '../FormTitle'
import TextInput from '../TextInput'
import Dropdown from '../Dropdown'
import FormLabel from '../FormLabel'
import FormSubmit from '../FormSubmit'

export default function AddressInfo({ giveData }) {
  const [city, setCity] = React.useState(localStorage.getItem('city') || '')
  const [province, setProvince] = React.useState(
    localStorage.getItem('province') || 'Select a Province',
  )

  function proceed() {
    console.log('step 1')
    giveData({ city, province })
  }

  return (
    <div>
      <FormTitle>Checkout</FormTitle>

      <FormLabel text='Address Info'></FormLabel>
      <br />
      <br />

      <FormLabel text='City'></FormLabel>

      <TextInput
        placeholder='Enter your city'
        type='text'
        value={city}
        setValue={setCity}
      />

      <FormLabel text='Province' />

      <Dropdown
        defaultValue={province}
        setValue={setProvince}
        values={[
          'Select a Province',
          'Alberta',
          'British Columbia',
          'Manitoba',
          'New Brunswick',
          'Newfoundland & Labrador',
          'Nova Scotia',
          'Ontario',
          'Prince Edward Island',
          'Quebec',
          'Saskatchewan',
        ]}
      />

      <FormSubmit
        onClick={proceed}
        isDisabled={city === '' || province === 'Select a Province'}
        submitText={'Continue'}
      />
    </div>
  )
}
