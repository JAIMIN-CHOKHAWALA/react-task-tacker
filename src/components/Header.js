import propTypes from 'prop-types';
import Button from './Button';
   
const Header = ({ title, onAdd, displayForm }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={displayForm ? 'red' : 'green'} text={displayForm ? 'Close' : 'Add'} onclick={onAdd} />
        </header>
    );
}


Header.defaultProps = {
    title: "Default Title"
}

export default Header;
