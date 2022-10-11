import './button.css';

const Button = ({bgColor, text, textColor}) => {
  return (
    <button style={{backgroundColor: bgColor, color: textColor}} className='btn'>{text}</button>
  )
}

export default Button