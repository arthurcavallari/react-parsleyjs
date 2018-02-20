import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TabController, TabPanel} from "./Tabs";
import LoginForm from "./LoginForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleTabClick = this.handleTabClick.bind(this);

        this.state = {
            activeTab: "login"
        };
    }
    render() {
        const TABS = [
            { tabIndex: '0', label: 'Login' },
            { tabIndex: '1', label: 'Register' },
        ];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div className="container">
                    <TabController tabs={TABS}>
                        <TabPanel tabIndex="0">
                            <div className="views">
                                <div className="view" data-view="login-form">
                                    <LoginForm />
                                </div>
                                <div className="view" data-view="forgot-username">

                                </div>
                                <div className="view" data-view="forgot-password">

                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel tabIndex="1">
                            Registration form :)
                        </TabPanel>
                    </TabController>
                </div>
            </div>
        );
    }

    handleTabClick(event) {
        this.setState({activeTab: event.target.dataset.tab})
    }
}

export default App;
