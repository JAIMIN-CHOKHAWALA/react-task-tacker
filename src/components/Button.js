import propTypes  from 'prop-types';

const Button = ({color, text, onclick}) => {
        
    return (
        <button
            onClick={onclick}
            className='btn'
            style={{backgroundColor: color}}
            >{text}
        </button>
    );
    
}

Button.defaultProps = {
    text: 'default',
    color: 'black'
}

Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
    onClick: propTypes.func
}

export default Button;