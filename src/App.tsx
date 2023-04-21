import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentButton from './button';


interface Props {

}

interface State {
  showModal: boolean;
  result: number;
  operation: string;

}



export default class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      showModal: false,
      result: 0,
      operation: '',
    }
  }

  handleOpenClose() {
    this.setState({ showModal: !this.state.showModal })

  }
  setOperation(operation: string) {
    this.setState({ operation: operation });
  }
  calculate(operation: string) {
    const num1 = 10;
    const num2 = 9;
    let result;
    if (operation === "soma") {
      console.log('acho que ta')
     this.setState({result :num1 + num2}) ;
    } else{
      this.setState({result :num1 - num2}) ;
    }
    
   
  }




  render() {
    const { operation, result ,showModal} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Escolha uma operação para trabalhar com os números 10 e 9.
              <br></br>

            O resultado da operação {operation} é = {result}
          </p>
          <ComponentButton 
           setOperation={(value: string) => this.setOperation(value)}
           calculate={(value: string) => this.calculate(value)} 
           showModal={showModal} 
           handleOpenClose={() => this.handleOpenClose()}
          />
        </header>
      </div>
    );
  }
}

