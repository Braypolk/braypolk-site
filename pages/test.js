import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import Head from 'next/head'

export default function Test () {
  // this is for testing, not actually good for going across pages
  const [user, setUser] = useState({})

  function handleCallBackRes (res) {
    let userObject = jwt_decode(res.credential)
    console.log(userObject)
    setUser(userObject)
    document.getElementById('signInDiv').hidden = true

    
  }

  function handleSignOut (e) {
    setUser({})
    document.getElementById('signInDiv').hidden = false
  }

  useEffect(() => {
    // checks if the user is authenticated
    /* global google */
    const google = window.google
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: handleCallBackRes
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outilne',
      size: 'large'
    });

    google.accounts.id.prompt();
  }, [])

  return (
    <>
      <Head>
        <script
          src='https://accounts.google.com/gsi/client'
          async
          defer
        ></script>
      </Head>

      <div id='signInDiv'>hi</div>
      {Object.keys(user).length != 0 && (
        <button onClick={e => handleSignOut(e)}></button>
        
      )}
      <div className='test'>
        {user && (
          <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
          </div>
        )}
        <h2>Dashboard</h2>
      </div>
    </>
  )
}
