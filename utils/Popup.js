import { Fragment, useCallback, useState } from 'react'
import Drawer from 'react-bottom-drawer'
import handleFormSubmit from './handleFormSubmit'

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const openDrawer = useCallback(() => setIsVisible(true), [])
  const closeDrawer = useCallback(() => setIsVisible(false), [])
  const [inputValue, setInputValue] = useState('')

  function formatPhoneNumber (value) {
    if (!value) return value
    const phoneNumber = value.replace(/[^\d]/g, '')
    const phoneNumberLength = phoneNumber.length
    if (phoneNumberLength < 4) return phoneNumber
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`
  }

  const handleInput = e => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value)
    setInputValue(formattedPhoneNumber)
  }

  return (
    <Fragment>
      <div className='vh-100 d-flex align-items-center justify-content-center'>
        <p onClick={openDrawer} className=' connectButton'>
          Exchange Contact Info
        </p>
      </div>
      <Drawer
        duration={250}
        hideScrollbars={true}
        onClose={closeDrawer}
        isVisible={isVisible}
        className='drawer'
      >
        <form
          id='form'
          method='post'
          onSubmit={e => handleFormSubmit(e, 'mailContact')}
        >
          <input
            required
            type='text'
            id='name'
            name='name'
            placeholder='Your Name'
          />
          <input
            type='text'
            id='position'
            name='position'
            placeholder='Your Position'
          />
          <input
            type='text'
            id='comapny'
            name='comapny'
            placeholder='Your Comapny'
          />
          <input
            required
            type='email'
            id='email'
            name='email'
            placeholder='Your Email'
          />
          <input
            id='phone'
            name='phone'
            placeholder='Your Phone'
            onChange={e => handleInput(e)}
            value={inputValue}
          />

          <button id='submit' type='submit'>
            Submit
          </button>
        </form>
        <div id='success' style={{ marginBottom: '30px' }}>
          <h1>Thank you</h1>
          <p>Your contact has been submitted</p>
        </div>
      </Drawer>
    </Fragment>
  )
}

export default Popup
