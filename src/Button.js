import React from 'react';

const Button = (props) => {
    return(
        <button onClick={ () => {
            this.props.setCount( this.props.count + 1);
        }}> Clicked me!

        </button>
    )
}

export default Button;