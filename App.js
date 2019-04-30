import React, { Component } from 'react';
// import Header from './components/Header';
import Navbar from './components/Navbar';
// import Main from './components/Main';
import TextAreaExample from './components/Textarea';
import Button from './components/Button';


class App extends Component {
  render() {
  return (
    <fragment>
      <div>
        <Navbar />
      </div>
      <div>
        <TextAreaExample />
      </div>
      <br />
      <div>
        <Button />
      </div>
    </fragment>
         
      
    
  );
}
}

export default App;
