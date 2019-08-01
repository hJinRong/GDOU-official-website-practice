import React from 'react';
import './FirstLetter.css';



export default class FirstLetter extends React.Component {
    render() {
        return (
            <div className={this.props.diffFirstLettersClasses} id='firstLetterContainer'>
                {this.props.firstLetter}
                <div className={this.props.progressBarColor+' progressBar'}></div>
            </div>
        );
    }
}