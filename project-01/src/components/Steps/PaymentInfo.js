import React from 'react'
import FormTitle from '../FormTitle'
import RadioField from '../RadioField'
import FormLabel from '../FormLabel'
import NetworkState from '../NetworkState'
import FormSubmit from '../FormSubmit'

export default function PaymentInfo({ giveData }) {
  const [status, setStatus] = React.useState('none')
  function proceed() {
    setStatus('loading')
    giveData({ paymentType }).then(res => setStatus('complete'))
    // setTimeout(() => {
    //   setStatus('complete')
    // }, 2000)
  }

  const [networkState, setNetworkState] = React.useState(true)
  React.useEffect(() => {
    const onlineFn = () => {
      setNetworkState(true)
    }
    const offlineFn = () => {
      setNetworkState(false)
    }
    window.addEventListener('online', onlineFn)
    window.addEventListener('offline', offlineFn)
    return () => {
      window.removeEventListener('online', onlineFn)
      window.removeEventListener('offline', offlineFn)
    }
  })

  const [
    agreementAcceptanceStatus,
    setAgreementAcceptanceStatus,
  ] = React.useState(false)

  const [paymentType, setPaymentType] = React.useState(
    localStorage.getItem('paymentType'),
  )

  return (
    <div>
      <FormTitle>Checkout</FormTitle>

      <FormLabel text='Payment Info'></FormLabel>
      <br />
      <br />

      <FormLabel text='Payment Method' />
      <div>
        <RadioField
          paymentTypeList={['Bitcoin', 'Paypal', 'Credit Card']}
          setValue={setPaymentType}
          paymentType={paymentType}
        />
      </div>

      <input
        type='checkbox'
        onChange={() =>
          setAgreementAcceptanceStatus(!agreementAcceptanceStatus)
        }
      />
      <label>{'I agree to the Terms & Conditions'}</label>

      {!networkState && (
        <div>
          <NetworkState networkState={networkState} />
        </div>
      )}

      <div>
        <FormSubmit
          onClick={proceed}
          isDisabled={
            paymentType === null || !networkState || !agreementAcceptanceStatus
          }
          submitText={'Submit'}
          loadingText={'Saving Data...'}
          completeText={'Data Saved!'}
          isComplete={status === 'complete'}
          isLoading={status === 'loading'}
        />
      </div>
    </div>
  )
}
