import React from "react";

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  const logIn = (email, password) => {
    if (email !== "valid@email.com" || password !== "correctpassword") {
      return
    }

    setIsLoggedIn(true)
  }

  const logOut =() => {
    setIsLoggedIn(false)
  }

  const value = { logIn, logOut, isLoggedIn }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {
            (value) => {
              return <WrappedComponent {...value} {...this.props} />
            }
          }
        </AuthContext.Consumer>
      );
    }
  };
};