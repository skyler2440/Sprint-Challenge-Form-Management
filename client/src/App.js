import React from 'react';
import FormikRegForm from './components/RegForm'
import './App.css';


class App extends React.Component{
  constructor(props){
    console.log(props)
    super(props)
    this.state={
     }
  }
  render(){
    return(
      <FormikRegForm />
    )
  }
}

export default App;