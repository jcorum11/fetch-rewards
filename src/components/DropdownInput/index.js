/** @jsxImportSource @emotion/react */
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectOptions, setOccupation, setState} from './dropdownInputSlice'
import { css } from '@emotion/react';

const DropdownInput = ({ type }) => {
  const dispatch = useDispatch()
  const options = useSelector(selectOptions)
  const key = `${type}s`.toLowerCase()
  const handleChange = (event) => {
    if (type === 'State') {
      dispatch(setState(event.target.value))
    } else if (type === 'Occupation') {
      dispatch(setOccupation(event.target.value))
    }
  }
  return (
    <div css={inputContainer}>
      <label css={label} htmlFor={type} data-testid={`${type}input-label`.toLowerCase()}>{type}: </label>
      <select css={input} name={type.toLowerCase()} id={type.toLowerCase()} onChange={handleChange}>
      <option value=''>{type === 'State' ? 'Select a state' : 'Select an occupation'}</option>
        {
          options[key] && options[key].map((option, index) => {
            return <option value={type === 'State' ? option.name : option} key={`option-${index}`}>{type === 'State' ? option.name : option}</option>
          })
        }
      </select>
    </div>
  )
}

const label = css`
display: block;
color: white
`

const inputContainer = css`
padding: .5rem;
`

const input = css`
width: 100%;
height: 2rem;
border-radius: 5px;
`

export default DropdownInput
