import PropTypes from 'prop-types' // impt 
import Button from '../Button/Button';
import './header.css';

// rafce 
const Header = ({title}) => {
  return (
    <header className='header'>
        <h1> {title} </h1>
        <Button textColor='white' bgColor='green' text='Hello' />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header