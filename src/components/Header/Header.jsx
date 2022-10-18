import PropTypes from 'prop-types' // impt 
import Button from '../Button/Button';
import './header.css';

// rafce 
const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className='header'>
        <h1> {title} </h1>
        <Button 
          text={showAdd ? 'Close' : 'Add'}
          bgColor={showAdd ? 'red' : 'steelblue'}
          onClick={onAdd}   
        />
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