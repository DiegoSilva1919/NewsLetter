import { Link, useLocation } from 'react-router-dom'
import './thanks.sass'
import '../../styles/globalStyles.sass'

import iconSuccess from '../../assets/icon-success.svg'

const Thanks = () => {
  const location = useLocation()
  const state = location.state
  const email = state?.email

  return (
    <div className="div-thanks">
      <main>
        <img src={iconSuccess} alt="ícone de sucesso" />

        <h2> Thanks for subscribing!</h2>
        <p>
          A confirmation email has been sent to <b>{email}</b>{' '}
          Please open it and click the button inside to confirm your
          subscription.
        </p>
        <Link className="link" to="/">
          Dismiss message
        </Link>
      </main>
    </div>
  )
}

export default Thanks
