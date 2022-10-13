import './button.css';
import PropTypes from 'prop-types'

const Button = ({bgColor, text, textColor, onClick}) => {
  return (
    <button 
        onClick={onClick}
        style={{backgroundColor: bgColor, color: textColor}}
        className='btn'
    >
        {text}
    </button>
  )
}

Button.defaultProps = {
    textColor: 'white',
    bgColor: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func, 
}

export default Button