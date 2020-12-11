import React from 'react';

import withData from "./withData";

const UserPofile = ({name, email,data}) => (
    <div className="container">
        <h1> {name} </h1>
        <h2> {email} </h2>
        Posts:
        {
            data.map(post => (
                <div className="post" key={post.id}>
                    <h1> {post.title} </h1>
                    <p> {post.body} </p>
                </div>
            ))
        }
    </div>
);

export default withData(UserPofile);
