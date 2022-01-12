import React from 'react';
import { withAuth } from '../components/AuthContext';

export const Login = (props) => {
  const autorization = e => {
    e.preventDefault()
    const { email, password } = e.target
    props.Login(email.value, password.value)
  }

  if(props.isLoggedIn) {
    props.navigate('Map')
  }

  return (<>
    <div className="logo">
      <div className="logoTaxi"></div>
    </div>
    <div className="container">
      <div className="loginContainer">
        <form onSubmit={autorization} className="loginForm">
          <fieldset className='loginBorder'>
            <legend className="loginTitle">Войти</legend>
              <span>Email</span>
              <input type="Email" placeholder='mail@mail.ru' className="loginInput" />
              <span>Пароль</span>
              <input type="password" placeholder='*******' className="loginInput" />
              <button type="submit" className='loginButton'>Войти</button>
              <div className="bottomtext">
                <span>Новый пользователь?</span>
                <button className="buttonOn" onClick={() => {props.navigate('Registration')}}>Зарегестрируйтесь</button>
              </div> 
          </fieldset> 
        </form>
      </div>
    </div>
  </>
  );
};

export const LoginWithAuth = withAuth(Login)