import React from 'react';

import withData from "./withData";

const UserList = ({data}) => (
    <div className="container user-list">
        <h1> User Lists </h1>
        {data.map(user => (
            <div className="user" key={user.id}>
                <h1> {user.name} </h1>
                <h2> {user.email} </h2>
            </div>
        ))
        }
    </div>
);

export default withData(UserList);
