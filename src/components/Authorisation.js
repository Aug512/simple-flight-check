import React from 'react'
import { connect } from 'react-redux'
import { authorise } from '../redux/actionCreators/setAuthorisaton'

const mapDispatchToProps = dispatch => {
  return {
    authorise: () => dispatch(authorise())
  }
}

const Authorisation = ({ authorise }) => {

  const LogIn = e => {
    e.preventDefault()
    window.sessionStorage.setItem('isAuthorised', 'true')
    authorise()
  }

  const validatePassword = e => {
    const regexp = /\p{sc=Cyrillic}/gu

    if (e.target.value.match(regexp)) {
      console.log('Пароль не должен содержать кириллицу!')
    }
  }

  return(
    <div style={{width: '600px', height: '400px', border: '1px solid white'}}>
      <form onSubmit={ e => LogIn(e)}>
        <p>Login</p>
        <input type='email' required autoComplete='email' autoFocus />
        <p>Password</p>
        <input type='password' required minLength='8' onChange={e => validatePassword(e)}/>
        <hr />
        <button type='submit'>log in</button>
      </form>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Authorisation)
