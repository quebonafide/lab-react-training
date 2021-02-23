import React, { Component } from 'react'

export default class Carousel extends Component {
    state = {
        index: 0
      }

      rightClickHandler = () => {
        if (this.state.index < 3) {
            this.setState((state, props) => ({
                index: state.index + 1
            }));
        }
        if (this.state.index === 3) {
            this.setState((state, props) => ({
                index: 0
            }));
        }
      }

      leftClickHandler = () => {
        if (this.state.index > 0) {
            this.setState((state, props) => ({
                index: state.index - 1
            }));
        }
        if (this.state.index === 0) {
            this.setState((state, props) => ({
                index: 3
            }));
        }
      }

    render() {
        
        return (
            <div>
                <button onClick={this.leftClickHandler}>{this.state.counter} left</button>
                <img src= {this.props.imgs[this.state.index]} alt='face'/>
                <button onClick={this.rightClickHandler}>{this.state.counter} right</button>
            </div>

        )
    }
}
