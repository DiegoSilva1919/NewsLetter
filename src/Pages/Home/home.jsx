import { useState } from 'react'
import { Link } from 'react-router-dom'

import IconList from '../../assets/icon-list.svg'
import SignUpDesktop from '../../assets/illustration-sign-up-desktop.svg'
import SignUp from '../../assets/illustration-sign-up-mobile.svg'
import AlertErro from '../../components/alertErro'

import './home.sass'
import '../../styles/globalStyles.sass'

function Home() {
  const [showError, setShowError] = useState(false)
  const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.com[a-zA-Z]{2,4}$/.test()

  function validateEmail(input) {
    if(input.target.value.toLowerCase() != emailFormat) {
      return setShowError(true);
    } else {
      return setShowError(false);
    }
  }

  function onChangeInput(input) {
    validateEmail(input);
    console.log(input.target.value);
  }

  return (
    <div>
      <div className="Content">
        <img className="SignUp" src={SignUp} alt="imagem do sign-up" />
        <img
          className="SignUpDesktop"
          src={SignUpDesktop}
          alt="imagem do sign-up"
        />
        <main className="MainContent">
          <h1>Stay updated!</h1>

          <p>Join 60.000+ product managers receiving monthly updates on:</p>
          <p>
            <img src={IconList} alt="imagem do icon-list" />
            Product discovery and building what matters
          </p>
          <p>
            <img src={IconList} alt="imagem do icon-list" />
            Measuring to ensure updates are a success
          </p>
          <p>
            <img src={IconList} alt="imagem do icon-list" />
            And much more!
          </p>

          <label>
            <div className="div-Label">
              <p className="p-Label">Email address</p>
              <AlertErro showError={showError} />
            </div>

            <input
              onChange={onChangeInput}
              type="email"
              name="email"
              placeholder="email@company.com"
            />
          </label>
          <Link className="link" to="/thanks">
            Subscribe to monthly newsletter
          </Link>
        </main>{' '}
      </div>
    </div>
  )
}
export default Home
