import React from 'react';
import './Die.css'
class Die extends React.Component {
    render() {
        return (
            <div className="die-container">
                <i className={`fas fa-dice-${this.props.face} fa-10x ${this.props.rolling ? 'shaking' : ''}`}></i>
            </div>
        )
    }
}
export default Die;