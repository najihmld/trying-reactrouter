import React, { Component } from 'react';
import Table from '../components/Table';


class App extends Component {
  render() {
    return(
      <div>
        <Table {...this.props}/>
          
      </div>
    )
  }
}

export default App;
