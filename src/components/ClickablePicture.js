import React, { Component } from 'react';

export default class  extends Component {
    state = {
        counter: 0,
        clicked: false,
        noGlasses: '/img/persons/maxence.png',
        glasses: '/img/persons/maxence-glasses.png'
    }

    clickHandler = () => {
        console.log('click');
            this.setState((state, props) => ({
            counter: state.counter + 1
            }))
      }

      clickHandler = () => {
        this.setState((state, props) => ({
            clicked: !state.clicked
        }))
      }

    render() {
        return (
            <div>
                <img onClick={this.clickHandler} src = {this.state.clicked ? this.state.glasses : this.state.noGlasses} alt= 'logo'/>
            </div>
        )
    }
}