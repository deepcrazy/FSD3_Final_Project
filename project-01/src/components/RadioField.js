import React from 'react'

const paymentTypeList = ['Bitcoin', 'Paypal', 'Credit Card']
export default function RadioField({ setValue, paymentType }) {
  let radioElement = paymentTypeList.map((item, index) => {
    return (
      <div key={index}>
        <label>
          <input
            type="radio"
            name="paymentType"
            checked={paymentType === item}
            // onChange={onChange}
            onChange = {e => {
                setValue(e.target.value)
            }}
            value={item}>
          </input>
          {item}
        </label>
      </div>
    )
  })
  return radioElement
}