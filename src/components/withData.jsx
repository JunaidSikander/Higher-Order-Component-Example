import React, {useEffect, useState} from 'react';

const withData = WrapComponent => {
    const WithData = props => {
        const [data, setData] = useState([]);

        useEffect(() => {
            fetch(props.dataSource)
                .then(response => response.json())
                .then(data => setData(data.slice(0, 3)));
        });
        return (
            data.length < 1 ?
                <h1>Loading</h1> :
                <WrapComponent data={data}  {...props} />
        )
    };

    return WithData
};

export default withData
