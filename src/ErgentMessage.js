import React from 'react';
import closeBtn from './closeBtn_2.svg'
import './ErgentMessage.css'

export default class ErgentMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showTheTip: true,

        };
        this.closeTheTips = this.closeTheTips.bind(this);
    }

    closeTheTips() {
        if (this.state.showTheTip === true) {
            this.setState({
                showTheTip: false
            });
        }
    }

    render() {
        return (
            this.state.showTheTip === true ?
                (<div className='MessageContainer'>
                    <div className='titleContainer'><span><a href={this.props.moreInfo}>{this.props.title}</a></span></div>
                    <div className='closeTheTip' onClick={this.closeTheTips.bind(this)}>
                        <img src={closeBtn} alt='' />
                    </div>
                </div>) : null
        );
    }
}