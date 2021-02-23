import React, { Component } from 'react'

export default class Dice extends Component {
    state = {
        image: `/img/dice${Math.floor(Math.random() * Math.floor(6))+1}.png`
      }

      clickHandler = () => {
        this.setState((state, props) => ({
            image: `/img/dice-empty.png`
        }));
        setTimeout(() => {
            this.setState({
            image: `/img/dice${Math.floor(Math.random() * Math.floor(6))+1}.png`
          })
        }, 1000);
      }

    render() {
        
        return (
            <div>
                <img onClick={this.clickHandler} src= {this.state.image} alt='dice' />
            </div>
        )
    }
}
