import React from 'react';
import './DestinationGroup.css'

export default class DestinationGroup extends React.Component {
    
    render() {
        const group = this.props.destination.map((a) => {
            return (<li>
                <a href={a[1]}>{a[0]}</a>
            </li>);
        });

        return (
            <ul>{group}</ul>
        );
    }
}