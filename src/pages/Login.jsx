import React from 'react';

export const Login = (props) => {
  return (<>
    <div className="logo">
      <div className="logoTaxi"></div>
    </div>
    <div className="container">
      <div className="loginContainer">
        <form className="loginForm">
          <fieldset className='loginBorder'>
            <legend className="loginTitle">Войти</legend>
              <span>Email</span>
              <input type="text" placeholder='mail@mail.ru' className="loginInput" />
              <span>Пароль</span>
              <input type="text" placeholder='*******' className="loginInput" />
              <button className='loginButton'onClick={() => {props.navigate('Map')}}>Войти</button>
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

