import React from 'react';

import UserList from "./components/UserList";
import UserPofile from "./components/UserPofile";

import './App.scss'

const App = () => (
    <div className='App'>
        <UserList/>
        <UserPofile name='Junaid' email="junaid_sikander@live.com"/>
    </div>
);

export default App;
