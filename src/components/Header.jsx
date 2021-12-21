import React from 'react';

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => {props.navigate('Map')}}>
              Карта
            </button>
          </li>
          <li>
            <button onClick={(pops) => {props.navigate('Profile')}}>
              Профиль
            </button>
          </li>
          <li>
            <button onClick={() => {props.navigate('Login')}}>
              Выйти
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;