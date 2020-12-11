import React from 'react';

import UserList from "./components/UserList";
import UserPofile from "./components/UserPofile";

import './App.scss'

const App = () => (
    <div className='App'>
        <UserList dataSource='https://jsonplaceholder.typicode.com/users'/>
        <UserPofile name='Junaid' email="junaid_sikander@live.com" dataSource='https://jsonplaceholder.typicode.com/posts'/>
    </div>
);

export default App;
