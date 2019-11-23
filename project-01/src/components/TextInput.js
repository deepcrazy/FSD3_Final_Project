import './TextInput.css'
import React from 'react'

export default function TextInput({ id, placeholder, value, setValue, type }) {
  return (
    <div>
      <input
        id={id}
        className='TextInput'
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={e => {
          setValue(e.target.value)
        }}
      />
    </div>
  )
}
