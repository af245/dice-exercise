import React from 'react';
import Die from './Die';
import './RollDice.css'
class RollDice extends React.Component {
    static defaultProps = { faces: ['one', 'two', 'three', 'four', 'five', 'six'] }
    constructor(props) {
        super(props);
        this.state = {
            die1: 'one',
            die2: 'one',
            isRolling: false
        }
        this.roll = this.roll.bind(this)
    }
    roll() {
        let newFaceDie1 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
        let newFaceDie2 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
        this.setState({
            die1: newFaceDie1,
            die2: newFaceDie2,
            isRolling: true
        });
        setTimeout(() => {
            this.setState({ isRolling: false });
        }, 1000)
    }
    render() {
        return (
            <div className="dice-wrapper" >
                <div className="dice-container">
                    <Die face={this.state.die1} rolling={this.state.isRolling} />
                    <Die face={this.state.die2} rolling={this.state.isRolling} />
                </div>
                <div>
                    <button onClick={this.roll} disabled={this.state.isRolling}>
                        {this.state.isRolling ? 'Rolling...' : 'Roll Dice'}
                    </button>
                </div>
            </div>
        )
    }
}
export default RollDice;