import React from 'react'

const paymentTypeList = ['Bitcoin', 'Paypal', 'Credit Card']
export default function RadioField({ setValue, paymentType }) {
  let radioElement = paymentTypeList.map((item, index) => {
    console.log(index)
    console.log(paymentType)
    return (
      <div key={index}>
        <label>
          <input
            type='radio'
            name='paymentType'
            checked={paymentType === null ? index === 0 : paymentType === item}
            // onChange={onChange}
            onChange={e => {
              setValue(e.target.value)
            }}
            value={item}
          ></input>
          {item}
        </label>
      </div>
    )
  })
  return radioElement
}
