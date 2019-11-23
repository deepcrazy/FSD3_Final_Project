import './App.css'
import React from 'react'
import FormTitle from './components/FormTitle'
import TextInput from './components/TextInput'
import Dropdown from './components/Dropdown'
import addData from './utils/FirebaseInterface'
import FormField from './components/FormField'
import FormFieldHeading from './components/FormFieldHeading'
import FormLabel from './components/FormLabel'
import FormTextInput from './components/FormTextInput'
import RadioField from './components/RadioField'
import NetworkState from './components/NetworkState'
// import '../public/js/firebase_basic'
// import writeDatabase from '../public/js/firebase_database'

export default function App() {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [dietaryRestriction, setDietaryRestriction] = React.useState('None')
  const [city, setCity] = React.useState('')
  const [province, setProvince] = React.useState('Select a Province')

  const [paymentType, setPaymentType] = React.useState(null)
  // const onChangePaymentType = (event) => {
  //   setPaymentType(event.target.value)
  // }

  const [agreementAcceptanceStatus, setAgreementAcceptanceStatus] = React.useState(false)
  const [saveDataButtonDisable, setSaveDataButtonDisable] = React.useState(false)
  const onCheckboxButtonClick = (event) => {
    setAgreementAcceptanceStatus(event.target.checked)
    console.log(agreementAcceptanceStatus)
  }

  React.useEffect(() => {
    if (paymentType === "" || !agreementAcceptanceStatus)
      setSaveDataButtonDisable(true)
    else
      setSaveDataButtonDisable(false)
  }, [agreementAcceptanceStatus, paymentType])

  const [networkState, setNetworkState] = React.useState(true)
  React.useEffect(() => {
    const onlineFn = () => {
      setNetworkState(true)
    }
    const offlineFn = () => {
      setNetworkState(false)
    }
    window.addEventListener("online", onlineFn)
    window.addEventListener("offline", offlineFn)
  })

  const [previousSectionState, setpreviousSectionState] = React.useState(true)
  const [nextSectionState, setnextSectionState] = React.useState(false)
  function onClickContinue() {
    setnextSectionState(true)
    setpreviousSectionState(false)
  }

  function onClickSaveData() {
    const data = {
      firstName: firstName,
      lasName: lastName,
      dietaryRestriction: dietaryRestriction,
      city: city,
      province: province,
      paymentType: paymentType
    }

    console.log(data)
    addData(firstName, lastName, dietaryRestriction, city, province, paymentType)
  }
  return (
    <div className='App'>
      <div className='App-Content'>
        {previousSectionState && <div>
          <FormTitle>Checkout</FormTitle>

          {/* Put your solution here 👇 */}

          <FormLabel
            text="Basic Info"
          />
          <br></br>
          <br></br>

          <FormLabel
            text="First Name"
          />
          <TextInput
            type='text'
            setValue={setFirstName}
            value={firstName}
            placeholder="Enter your first name"
          />

          <br></br>
          <FormLabel
            text="Last Name"
          />
          <TextInput
            type='text'
            setValue={setLastName}
            value={lastName}
            placeholder="Enter your last name"
          />
          <br></br>
          <FormLabel
            text="Diet restriction"
          />
          <Dropdown
            setValue={setDietaryRestriction}
            values={['None', 'Vegan', 'Vegetarian', 'Halal/Kosher']}
          />

          <button onClick={onClickContinue} disabled={firstName === "" || lastName === "" ? true : false}>
            Continue
          </button>
        </div>}

        {nextSectionState && <div>
          <FormTitle>
            Checkout
          </FormTitle>

          <FormLabel text="City">
          </FormLabel>

          <TextInput
            placeholder="Enter your city"
            type="text"
            value={city}
            setValue={setCity}
          />

          <FormLabel
            text="Province"
          />

          <Dropdown
            setValue={setProvince}
            values={['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland & Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan']}
          />

          <button onClick={onClickContinue} disabled={city === "" || province === "Select a Province" ? true : false}>
            Continue
          </button>
        </div>}

        {nextSectionState && <div>
          <FormTitle>Checkout</FormTitle>

          <FormFieldHeading>Payment Info</FormFieldHeading>

          <FormLabel text="Payment Method"
          />
          <div>
            <RadioField
              setValue={setPaymentType}
              paymentType={paymentType}
            // onChange={onChangePaymentType}
            />
          </div>

          <input
            type="checkbox"
            onChange={onCheckboxButtonClick}
          />
          <label>{"I agree to the Terms & Conditions"}</label>

          {!networkState && <div>
            <NetworkState
              networkState={networkState}
            />
          </div>}

          <div>

            <button type='submit' onClick={onClickSaveData} disabled={saveDataButtonDisable || !networkState ? true : false}>
              Save Data
          </button>
          </div>

        </div>}
      </div>
    </div>
  )
}
