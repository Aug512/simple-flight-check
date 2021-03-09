import React, { useState, useRef } from 'react'
import { Col, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { authorise } from '../../redux/actionCreators/setAuthorisaton'
import './noInputsIcons.css'
import styles from './Authorisation.module.scss'

const mapDispatchToProps = dispatch => {
  return {
    authorise: () => dispatch(authorise())
  }
}

const Authorisation = ({ authorise }) => {

  const [validated, setValidated] = useState(false);
  const [passMessage, setPassMessage] = useState('Пароль должен содержать не менее 8 символов')

  const loginRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()

    const form = event.target
    const password = form[1].value
    const regexp = /\p{sc=Cyrillic}/gu
    const inputs = [form[0], form[1]]
    const labels = [loginRef.current, passwordRef.current]

    inputs.forEach((input, index) => {
      if (!input.validity.valid) {labels[index].style.color = '#EB1717'}
    }) //Меняю цвет заголовка только для невалидного инпута

    if (form.checkValidity() === false) {

      if (password.length <= 8) {
        setPassMessage('Пароль должен содержать не менее 8 символов')
      } else if (password.match(regexp)) {
        setPassMessage('Пароль не должен содержать кириллицу')
      }
    } else {
      window.sessionStorage.setItem('isAuthorised', 'true')
      authorise()
    }

    setValidated(true)
  }

  const resetLabelsColors = () => {    //сброс цвета для заголовков

    loginRef.current.style.color = ''
    passwordRef.current.style.color = ''
  
    setValidated(false)
  }

  return(
    <div className={styles.authorisationScreen}>
      <div className={'card ' + styles.formCard}>
        <h2 className={styles.title}>Simple Flight Check</h2>
        <Form noValidate validated={validated} onSubmit={e => handleSubmit(e)} onChange={resetLabelsColors}>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustom01" className={styles.formGroup}>
              <Form.Label className={styles.inputLabel} ref={loginRef}>Логин</Form.Label>
              <Form.Control type="email" required={true} className={styles.inputField} autoComplete='none' />
              <Form.Control.Feedback type='invalid' className={styles.feedbackMessage}>
                Введите существующий email
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
            <Form.Row>
            <Form.Group as={Col} controlId="validationCustom02" className={styles.formGroup}>
              <Form.Label className={styles.inputLabel} ref={passwordRef}>Пароль</Form.Label>
              <Form.Control
                required
                type="Password"
                pattern='[^А-Яа-яЁё]{8,}'
                className={styles.inputField}
              />
              <Form.Control.Feedback type='invalid' className={styles.feedbackMessage}>{passMessage}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <div className={styles.buttonContainer}>
            <Button type="submit" className={styles.submitButton}>Войти</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Authorisation)
