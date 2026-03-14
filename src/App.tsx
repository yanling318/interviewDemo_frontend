import React, {Component} from 'react';
//import './App.css';

class App extends Component<any,any>{
  render() {
    return (
        <div className="App">
          <main>
            {
              this.props.children
            }
          </main>
        </div>
    );
  }
}

export default App;
