/* eslint-disable prettier/prettier */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import IconList from "../../assets/icon-list.svg";
import SignUpDesktop from "../../assets/illustration-sign-up-desktop.svg";
import SignUp from "../../assets/illustration-sign-up-mobile.svg";

import "./home.sass";
import "../../styles/globalStyles.sass";

function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  // const [showError, setShowError] = useState();
  const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  function validateEmail() {
    const isValid = emailFormat.test(email);
    return isValid;
  }

  function onSubmitForm(e) {
    e.preventDefault();

    if (validateEmail()) {
      navigate.push("/thanks");
    }
  }

  return (
    <div>
      <div className="Content">
        <img className="SignUp" src={SignUp} alt="imagem do sign-up" />
        <img
          className="SignUpDesktop"
          src={SignUpDesktop}
          alt="imagem do sign-up-Desktop"
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

          <form onSubmit={onSubmitForm}>
            <label>
              <div className="div-Label">
                <p className="p-Label">Email address</p>
                {/* {showError ? (
                  <p className="alert">Valid email required</p>
                ) : null} */}
              </div>

              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                required="required"
                placeholder="email@company.com"
              />
            </label>
            <button className="link" type="submit">
              Subscribe to monthly newsletter
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
export default Home;
