import './Dropdown.css'
import React from 'react'

export default function Dropdown({ id, values, setValue, type, defaultValue }) {
  console.log('default', defaultValue)
  return (
    <div>
      <select
        id={id}
        className='Dropdown'
        defaultValue={defaultValue}
        onChange={e => {
          setValue(e.target.value)
        }}
      >
        {values.map((value, index) => (
          <option key={index} id={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}
