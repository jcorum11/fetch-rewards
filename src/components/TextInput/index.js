/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setEmail, setFirstName, setLastName, setMiddleName, setPassword } from './textInputSlice'
import { css } from '@emotion/react'

const TextInput = ({ type, nameType = '' }) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
    switch (type) {
      case 'Name':
        if (nameType === 'First') {
          dispatch(setFirstName(event.target.value))
        } else if (nameType === 'Middle') {
          dispatch(setMiddleName(event.target.value))
        } else if (nameType === 'Last') {
          dispatch(setLastName(event.target.value))
        }
        break
      case 'Password':
        dispatch(setPassword(event.target.value))
        break
      case 'Email':
        dispatch(setEmail(event.target.value))
        break
      default:
        break
    }
  }
  const cleanType = type === 'name' ? `${nameType}input`.toLowerCase() : `${type}input`.toLowerCase()
  return (
    <div css={inputContainer}>
      <label css={label} htmlFor={cleanType} data-testid={`${nameType.toLowerCase()}${cleanType}-label`}>{nameType} {type}: </label>
      <input css={input} type="text" name={type.toLowerCase()} id={cleanType} data-testid={`${nameType.toLowerCase()}${cleanType}-input`} value={value} onChange={handleChange} />
    </div>
  )
}

const label = css`
display: block;
color: white;
`

const inputContainer = css`
padding: .5rem;
`

const input = css`
width: 98%;
height: 1.5rem;
border-radius: 5px;
`

export default TextInput
