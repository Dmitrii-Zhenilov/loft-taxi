import React from 'react';
import './App.css';
import Header from './components/Header';
import {Login} from './pages/Login';
import {Map} from './pages/Map';
import {Profile} from './pages/Profile';
import Registration from './pages/Registration';


class App extends React.Component {

  state = { currentPage: 'Login'}

  navigateTo = (page) => {
    this.setState({currentPage: page})
  }

  render(){
    return <>
    <Header navigate={this.navigateTo}/>
    <main>
      <section>
        {this.state.currentPage === 'Map' && <Map />}
        {this.state.currentPage === 'Login' && <Login navigate={this.navigateTo}/>}
        {this.state.currentPage === 'Profile' && <Profile />}
        {this.state.currentPage === 'Registration' && <Registration navigate={this.navigateTo}/>}
      </section>
    </main>
    </>
  }
}

export default App;
