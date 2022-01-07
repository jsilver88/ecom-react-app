import './Header.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg'

function Header({ currentUser }) {
  return (
    <header className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          Shop
        </Link>
        <Link className='option' to='/contact'>
          Contact
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className='option' to='/signin'>
            Sign In
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
