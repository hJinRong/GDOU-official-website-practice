import React from 'react';
import './SlideShow.css';
import img_g from './1.jpg';
import img_d from './2.jpg';
import img_o from './3.jpg';
import img_u from './4.jpg';
import FirstLetter from './FirstLetter';


export default class SlideShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            img_target: img_g,
            font: ['Grand in knowledge', 'Open in acceptance', 'Decent in morality', 'Upright in behavior'],
            showFont: ''
        };
        this.changeTheBackgroundImg = this.changeTheBackgroundImg.bind(this);
    }

    changeTheBackgroundImg() {
        if (this.state.img_target === img_g) {
            this.setState({
                img_target: img_d,
                showFont: this.state.font[0]
            });
        } else {
            if (this.state.img_target === img_d) {
                this.setState({
                    img_target: img_o,
                    showFont: this.state.font[1]
                });
            } else {
                if (this.state.img_target === img_o) {
                    this.setState({
                        img_target: img_u,
                        showFont: this.state.font[2]
                    });
                } else {
                    if (this.state.img_target === img_u) {
                        this.setState({
                            img_target: img_g,
                            showFont: this.state.font[3]
                        });
                    }
                }
            }
        }
    }


    componentDidMount() {
        this.timer = setInterval(() => {
            this.changeTheBackgroundImg()
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        let showContent;
        if(this.state.showFont===this.state.font[0]) {
            showContent=(<div className='showContent_g'>{this.state.showFont}</div>)
        } else if(this.state.showFont===this.state.font[1]) {
            showContent=(<div className='showContent_d'>{this.state.showFont}</div>)
        } else if(this.state.showFont===this.state.font[2]) {
            showContent=(<div className='showContent_o'>{this.state.showFont}</div>)
        } else if(this.state.showFont===this.state.font[3]) {
            showContent=(<div className='showContent_u'>{this.state.showFont}</div>)
        }

        return (
            <div>
                <div className='fourFirstLetter'>
                    <FirstLetter diffFirstLettersClasses='g' firstLetter='G' progressBarColor='gsProgressBarColor' />
                    <FirstLetter diffFirstLettersClasses='d' firstLetter='D' progressBarColor='dsProgressBarColor' />
                    <FirstLetter diffFirstLettersClasses='o' firstLetter='O' progressBarColor='osProgressBarColor' />
                    <FirstLetter diffFirstLettersClasses='u' firstLetter='U' progressBarColor='usProgressBarColor' />
                </div>
                {showContent}
            </div>
        );
    }
}