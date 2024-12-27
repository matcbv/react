import './styles.css'
import PropTypes from 'prop-types';
import { Component } from 'react';

export class Button extends Component{
    render(){
        const { text, onClick, disabled = false } = this.props;
        return(
            <button
                onClick={onClick}
                disabled={disabled}
            >
                { text }
            </button>
        );
    };
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};
