import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import MainContainer from './MainContainer';
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {
  
  render() {
    return (
      <div>
        <NavBar/>
        <MainContainer/>
        <Footer/>
      </div>
    )
  }
}

export default App;
