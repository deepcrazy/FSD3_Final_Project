import React from 'react'

export default function RadioField({ paymentTypeList, setValue, paymentType }) {
  let radioElement = paymentTypeList.map((item, index) => {
    return (
      <div key={index}>
        <label>
          <input
            type='radio'
            name='paymentType'
            checked={paymentType === item}
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
