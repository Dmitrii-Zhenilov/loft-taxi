import React from 'react';

const Registration = (props) => {
  return (<>
    <div className="logo">
    <div className="logoTaxi"></div>
    </div>
    <div className="container">
      <div className="loginContainer">
        <form className="loginForm">
          <fieldset className='loginBorder'>
            <legend className="loginTitle">Регистрация</legend>
              <span>Email*</span>
              <input type="text" placeholder='mail@mail.ru' className="loginInput" />
              <span>Как вас зовут?*</span>
              <input type="text" placeholder='Петр Александрович' className="loginInput" />
              <span>Придумайте пароль*</span>
              <input type="text" placeholder='**********' className="loginInput" />
              <button className='loginButton'onClick={() => {props.navigate('Map')}}>Зарегистрироваться</button>
              <div className="bottomtext">
                <span>Уже зарегестрированны?</span>
                <button className="buttonOn" onClick={() => {props.navigate('Login')}}>Войти</button>
              </div> 
          </fieldset> 
        </form>
      </div>
    </div>
  </>
  );
};

export default Registration;