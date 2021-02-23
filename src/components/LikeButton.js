import React, { Component } from 'react';

export default class LikeButton extends Component {
    state = {
        counter: 0
    }

    clickHandler = () => {
        console.log('click');
            this.setState((state, props) => ({
            counter: state.counter + 1
            }))
      }



    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>{this.state.counter} Likes</button>
            </div>
        )
    }
}