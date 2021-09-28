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

/*
return (
    <header style={headerStyle}>
        <h1 style={{
            // inline style
            color: 'red',
            backgroundColor: 'blue',
            fontFamily: 'Roboto',
            borderRadius: '20px',
            textAlign: 'center'
        }}>{title}</h1>
    </header>
);

const headerStyle = {
    height: "30%",
    width: "90%",
    margin: "0 auto",
    padding: "10px",
    backgroundColor: "grey",
    borderRadius: "20px"
}
*/
