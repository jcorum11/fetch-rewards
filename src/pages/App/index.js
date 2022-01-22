/** @jsxImportSource @emotion/react */
import DropdownInput from '../../components/DropdownInput'
import TextInput from '../../components/TextInput'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchOptions, selectOccupation, selectOptionsFetchStatus, selectState } from '../../components/DropdownInput/dropdownInputSlice'
import { selectEmail, selectName, selectPassword } from '../../components/TextInput/textInputSlice'
import { selectPostStatus, sendInputs } from './appSlice'
import validate from './validator'
import { css } from '@emotion/react'

function App() {
  const dispatch = useDispatch()
  const optionStatus = useSelector(selectOptionsFetchStatus)
  const name = useSelector(selectName)
  const password = useSelector(selectPassword)
  const email = useSelector(selectEmail)
  const occupation = useSelector(selectOccupation)
  const state = useSelector(selectState)
  const postStatus = useSelector(selectPostStatus)
  useEffect(() => {
    dispatch(fetchOptions())
  }, [])
  const [validationFailed, setValidationFailed] = useState(false)
  const handleSubmit = () => {
    const payload = { name, password, email, occupation, state }
    console.log(payload)
    let result = validate(payload)
    console.log(result)
    if (validate(payload) === false) {
      setValidationFailed(true)
      return
    }
    setValidationFailed(false)
    dispatch(sendInputs(payload))
  }
  return (
    <div className="App" css={app}>
      <div css={container}>
        <header css={header}>
          <h1>Fetch Rewards Project</h1>
        </header>
        <TextInput type='Name' nameType='First' />
        <TextInput type='Name' nameType='Middle' />
        <TextInput type='Name' nameType='Last' />
        <TextInput type='Email' />
        <TextInput type='Password' />
        {optionStatus === 'complete' && <DropdownInput type='State' />}
        {optionStatus === 'complete' && <DropdownInput type='Occupation' />}
        <div css={buttonContainer}><button css={button} onClick={handleSubmit}>Submit</button></div>
        {validationFailed && <div css={messageContainer}><p css={message}>You didn't complete some fields!</p></div>}
        <div>
          <h1 css={header}>{postStatus}</h1>
        </div>
      </div>
    </div>
  )
}

const header = css`
display: flex;
justify-content: center;
color: white;
`

const container = css`
margin: 10vh 20vw 0;
background-color: darkcyan;
border-radius: 1rem;
width: 15vw;
`

const app = css`
display: flex;
justify-content: center;
`

const button = css`
color: darkcyan;
background-color: white;
height: 3rem;
width: 6rem;
border-radius: 10px;
font-weight: bold;
font-size: 15px;
`

const buttonContainer = css`
width: 100%;
display: flex;
justify-content: center;
margin: 1rem 0;
`

const messageContainer = css`
width: 100%;
display: flex;
justify-content: center;
`

const message = css`
color: white;
`

export default App
