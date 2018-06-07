import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Game extends Component {
    render() {
        const { height, width, mines } = this.props;
        return (
            <div className="game">
                <Board height={height} width={width} mines={mines} />
            </div>
        )
    }
}

Game.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    mines: PropTypes.number.isRequired
}

Game.defaultProps = {
    height: 8,
    width: 8,
    mines: 10
}

export default Game;