import React, { Component } from 'react';

class Counter extends Component {
   
    render() { 
        return (<div>
            <header className="App-header">
        <p className="time">01:15:09</p>
        
        <div className="bloc"><p className="text1">Hour</p><p className="text1">Minute</p><p className="text1">Second</p></div> 
        </header>
        </div>  );
    }
}
 
export default Counter;