import React from 'react';
import './App.css';
import Header from './components/Header';
import {LoginWithAuth} from './pages/Login';
import {Map} from './pages/Map';
import {ProfileWithAuth} from './pages/Profile';
import Registration from './pages/Registration';
import {withAuth} from './components/AuthContext'


class App extends React.Component {

  state = { currentPage: 'Login'}

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({currentPage: 'Login'});
    }else{
      this.setState({currentPage: page});
    }  
  };

  render(){
    return <>
    <Header navigate={this.navigateTo}/>
    <main>
      <section>
        {this.state.currentPage === 'Map' && <Map />}
        {this.state.currentPage === 'Login' && <LoginWithAuth navigate={this.navigateTo} />}
        {this.state.currentPage === 'Profile' && <ProfileWithAuth />}
        {this.state.currentPage === 'Registration' && <Registration navigate={this.navigateTo} />}
      </section>
    </main>
    </>
  }
}

export default withAuth(App);
