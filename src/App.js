import React, { Component } from 'react';
import {Name} from './Name';

class App extends Component{
  state={age:0}
  methad=()=>{
    this.setState({age:this.state.age+1})
    
  }
  render(){
    return(
      <div>
        <Name title="Naru">
          {this.state.age}
        </Name>
        <Name title="kiki"/>
        <Name title="hihi"/>
        <button onClick={this.methad}> check</button>
        </div>
    )

  }
}
export default App;