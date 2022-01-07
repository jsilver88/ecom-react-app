import { useState } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import './Login.scss'

import { signInWithGoogle } from '../../firebase/firebase.utils'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    alert(email, password)
    setEmail('')
    setPassword('')
  }

  const handleChange = (e) => {
    setEmail(e.target.value)
    setPassword(e.target.value)
  }

  return (
    <div className='login'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          label='email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          label='password'
          required
        />

        <div className='buttons'>
          <CustomButton type='submit' value='Submit Form'>
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default Login
