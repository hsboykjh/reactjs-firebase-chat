import React, { Component } from 'react';
import './App.css';
import Header from './component/Header'
import Main from './component/Main'

class App extends Component {

    render() {
        return(
            <div className="container">
                <div className="col-sm-offset-3 col-sm-6">
                    <div className="App">
                        <Header />
                        <Main />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
