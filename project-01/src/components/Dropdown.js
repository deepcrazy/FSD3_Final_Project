import './Dropdown.css'
import React from 'react'

export default function Dropdown({ id, values, setValue, type }) {
  return (
    <div>
      <select
        id={id}
        className='Dropdown'
        onChange={e => {
          setValue(e.target.value)
        }}
      >
        {values.map((value, index) => (
          <option key={index} value={value}>{value}</option>
        ))}
      </select>
    </div>
  )
}
